import * as Phaser from "phaser";
import { Player } from "../entities/Player";
import { GAME_WIDTH, GAME_HEIGHT, GROUND_Y, LevelData } from "../config";

export class LevelScene extends Phaser.Scene {
  private player!: Player;
  private platforms!: Phaser.Physics.Arcade.StaticGroup;
  private projectiles!: Phaser.Physics.Arcade.Group;
  private enemies!: Phaser.Physics.Arcade.Group;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private wasd!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };
  private spaceKey!: Phaser.Input.Keyboard.Key;
  private levelData!: LevelData;
  private enemiesRemaining = 0;
  private isMobile = false;
  private leftStick = { active: false, x: 0, y: 0, pointerId: -1 };
  private rightStick = {
    active: false,
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    pointerId: -1,
  };
  private jumpButton = { active: false, pointerId: -1 };
  private currentScore = 0;

  public onEnemyKilled?: (enemyType: string) => void;
  public onPlayerHit?: () => void;
  public onLevelComplete?: () => void;
  public onPlayerDied?: () => void;
  public currentHealth = 100;

  constructor() {
    super({ key: "LevelScene" });
  }

  init(data: {
    levelData: LevelData;
    health: number;
    score: number;
    onEnemyKilled?: (type: string) => void;
    onPlayerHit?: () => void;
    onLevelComplete?: () => void;
    onPlayerDied?: () => void;
  }) {
    this.levelData = data.levelData;
    this.currentHealth = data.health;
    this.currentScore = data.score;
    this.onEnemyKilled = data.onEnemyKilled;
    this.onPlayerHit = data.onPlayerHit;
    this.onLevelComplete = data.onLevelComplete;
    this.onPlayerDied = data.onPlayerDied;
  }

  create() {
    this.isMobile = this.sys.game.device.input.touch;

    // Create ground
    this.platforms = this.physics.add.staticGroup();
    const ground = this.add.rectangle(
      GAME_WIDTH / 2,
      GROUND_Y + 20,
      GAME_WIDTH,
      40,
      0x374151
    );
    this.platforms.add(ground);
    (ground.body as Phaser.Physics.Arcade.StaticBody).setSize(GAME_WIDTH, 40);
    (ground.body as Phaser.Physics.Arcade.StaticBody).setOffset(
      -GAME_WIDTH / 2,
      -20
    );

    // Create floating platforms
    const platformDefs =
      this.levelData.platforms ?? this.generateDefaultPlatforms();
    for (const p of platformDefs) {
      const px = p.x * GAME_WIDTH;
      const py = p.y * GAME_HEIGHT;
      const pw = p.width * GAME_WIDTH;
      const plat = this.add.rectangle(px, py, pw, 16, 0x4b5563);
      this.platforms.add(plat);
      (plat.body as Phaser.Physics.Arcade.StaticBody).setSize(pw, 16);
      (plat.body as Phaser.Physics.Arcade.StaticBody).setOffset(-pw / 2, -8);
    }

    // Create player
    this.player = new Player(this, GAME_WIDTH / 2, GROUND_Y - 40);
    this.physics.add.collider(this.player, this.platforms);

    // Create projectiles group
    this.projectiles = this.physics.add.group({
      defaultKey: "bullet",
      maxSize: 20,
    });

    // Create bullet texture
    const bulletGfx = this.add.graphics();
    bulletGfx.fillStyle(0xfbbf24, 1);
    bulletGfx.fillCircle(4, 4, 4);
    bulletGfx.generateTexture("bullet", 8, 8);
    bulletGfx.destroy();

    // Create enemies group
    this.enemies = this.physics.add.group();
    this.spawnEnemies();

    // Collisions
    this.physics.add.overlap(
      this.projectiles,
      this.enemies,
      this.onBulletHitEnemy,
      undefined,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.onEnemyTouchPlayer,
      undefined,
      this
    );

    // Keyboard input
    if (this.input.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
      this.wasd = {
        W: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        A: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        S: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        D: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      };
      this.spaceKey = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE
      );
    }

    // Mouse aim + fire (desktop)
    this.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
      if (!this.isMobile) {
        const angle = Phaser.Math.Angle.Between(
          this.player.x,
          this.player.y,
          pointer.worldX,
          pointer.worldY
        );
        this.player.setAim(angle);
      }
    });
    this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
      if (!this.isMobile) {
        this.player.setFiring(true);
      } else {
        this.handleTouchStart(pointer);
      }
    });
    this.input.on("pointerup", (pointer: Phaser.Input.Pointer) => {
      if (!this.isMobile) {
        this.player.setFiring(false);
      } else {
        this.handleTouchEnd(pointer);
      }
    });
    this.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
      if (this.isMobile) {
        this.handleTouchMove(pointer);
      }
    });

    // Mobile UI overlay
    if (this.isMobile) {
      this.drawMobileControls();
    }

    // Launch HUD
    this.scene.launch("HUDScene", {
      health: this.currentHealth,
      score: this.currentScore,
      enemiesRemaining: this.enemiesRemaining,
    });
  }

  private generateDefaultPlatforms(): {
    x: number;
    y: number;
    width: number;
  }[] {
    return [
      { x: 0.2, y: 0.55, width: 0.15 },
      { x: 0.5, y: 0.45, width: 0.2 },
      { x: 0.8, y: 0.55, width: 0.15 },
      { x: 0.35, y: 0.7, width: 0.12 },
      { x: 0.65, y: 0.7, width: 0.12 },
    ];
  }

  private spawnEnemies() {
    this.enemiesRemaining = 0;
    for (const spawn of this.levelData.enemies) {
      for (let i = 0; i < spawn.count; i++) {
        const x = Phaser.Math.Between(50, GAME_WIDTH - 50);
        const y = Phaser.Math.Between(50, GROUND_Y - 100);
        const colors: Record<string, number> = {
          "alarm-clock": 0xef4444,
          laptop: 0x8b5cf6,
          traffic: 0xf97316,
          "cant-make-it": 0x06b6d4,
          "rain-cloud": 0x6366f1,
          "couch-potato": 0x84cc16,
        };
        const enemy = this.add.rectangle(
          x,
          y,
          24,
          24,
          colors[spawn.type] ?? 0xff0000
        ) as any;
        this.enemies.add(enemy);
        this.physics.add.existing(enemy);
        const body = enemy.body as Phaser.Physics.Arcade.Body;
        body.setAllowGravity(false);
        body.setCollideWorldBounds(true);
        body.setBounce(1, 1);
        const speed = this.getEnemySpeed(spawn.type);
        body.setVelocity(
          Phaser.Math.Between(-speed, speed),
          Phaser.Math.Between(-speed, speed)
        );
        enemy.enemyType = spawn.type;
        enemy.hp = spawn.type === "couch-potato" ? 3 : 1;
        this.enemiesRemaining++;
      }
    }
  }

  private getEnemySpeed(type: string): number {
    switch (type) {
      case "alarm-clock":
        return 60;
      case "laptop":
        return 100;
      case "traffic":
        return 180;
      case "cant-make-it":
        return 70;
      case "rain-cloud":
        return 50;
      case "couch-potato":
        return 40;
      default:
        return 80;
    }
  }

  private onBulletHitEnemy(bullet: any, enemy: any) {
    bullet.destroy();
    enemy.hp--;
    if (enemy.hp <= 0) {
      const type = enemy.enemyType as string;
      enemy.destroy();
      this.enemiesRemaining--;
      this.onEnemyKilled?.(type);

      const points: Record<string, number> = {
        "alarm-clock": 100,
        laptop: 150,
        traffic: 200,
        "cant-make-it": 75,
        "rain-cloud": 175,
        "couch-potato": 250,
      };
      this.currentScore += points[type] ?? 100;
      this.scene.get("HUDScene").events.emit("enemyKilled", this.enemiesRemaining);
      this.scene.get("HUDScene").events.emit("scoreChanged", this.currentScore);

      if (this.enemiesRemaining <= 0) {
        this.time.delayedCall(500, () => {
          this.onLevelComplete?.();
        });
      }
    } else {
      this.tweens.add({
        targets: enemy,
        alpha: 0.3,
        duration: 50,
        yoyo: true,
      });
    }
  }

  private onEnemyTouchPlayer(_player: any, _enemy: any) {
    if (this.player.hit()) {
      this.currentHealth -= 10;
      this.onPlayerHit?.();
      this.scene
        .get("HUDScene")
        .events.emit("healthChanged", this.currentHealth);
      if (this.currentHealth <= 0) {
        this.onPlayerDied?.();
      }
    }
  }

  private fireBullet() {
    const now = this.time.now;
    if (now - this.player.getLastFired() < this.player.getFireRate()) return;
    const bullet = this.projectiles.get(
      this.player.x,
      this.player.y,
      "bullet"
    ) as Phaser.Physics.Arcade.Sprite;
    if (!bullet) return;
    bullet.setActive(true);
    bullet.setVisible(true);
    bullet.setPosition(this.player.x, this.player.y);
    (bullet.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
    const speed = 500;
    const angle = this.player.getAimAngle();
    bullet.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    this.player.setLastFired(now);
    this.time.delayedCall(2000, () => {
      if (bullet.active) bullet.destroy();
    });
  }

  private handleTouchStart(pointer: Phaser.Input.Pointer) {
    const isLeftSide = pointer.x < GAME_WIDTH / 2;
    if (isLeftSide && pointer.y < GAME_HEIGHT * 0.4) {
      this.jumpButton = { active: true, pointerId: pointer.id };
      this.player.jump();
      return;
    }
    if (isLeftSide) {
      this.leftStick = { active: true, x: 0, y: 0, pointerId: pointer.id };
    } else {
      this.rightStick = {
        active: true,
        x: 0,
        y: 0,
        startX: pointer.x,
        startY: pointer.y,
        pointerId: pointer.id,
      };
    }
  }

  private handleTouchMove(pointer: Phaser.Input.Pointer) {
    if (
      pointer.id === this.leftStick.pointerId &&
      this.leftStick.active
    ) {
      this.leftStick.x =
        pointer.x < GAME_WIDTH * 0.2
          ? -1
          : pointer.x > GAME_WIDTH * 0.3
            ? 1
            : 0;
    }
    if (
      pointer.id === this.rightStick.pointerId &&
      this.rightStick.active
    ) {
      const dx = pointer.x - this.rightStick.startX;
      const dy = pointer.y - this.rightStick.startY;
      if (Math.sqrt(dx * dx + dy * dy) > 10) {
        this.player.setAim(Math.atan2(dy, dx));
        this.player.setFiring(true);
      }
    }
  }

  private handleTouchEnd(pointer: Phaser.Input.Pointer) {
    if (pointer.id === this.leftStick.pointerId) {
      this.leftStick = { active: false, x: 0, y: 0, pointerId: -1 };
    }
    if (pointer.id === this.rightStick.pointerId) {
      this.rightStick = {
        active: false,
        x: 0,
        y: 0,
        startX: 0,
        startY: 0,
        pointerId: -1,
      };
      this.player.setFiring(false);
    }
    if (pointer.id === this.jumpButton.pointerId) {
      this.jumpButton = { active: false, pointerId: -1 };
    }
  }

  private drawMobileControls() {
    const gfx = this.add.graphics();
    gfx.setAlpha(0.1);
    gfx.fillStyle(0xffffff);
    gfx.fillRect(0, GAME_HEIGHT * 0.4, GAME_WIDTH / 2, GAME_HEIGHT * 0.6);
    gfx.fillStyle(0xff4444);
    gfx.fillRect(GAME_WIDTH / 2, 0, GAME_WIDTH / 2, GAME_HEIGHT);
    gfx.fillStyle(0x44ff44);
    gfx.fillRect(0, 0, GAME_WIDTH / 2, GAME_HEIGHT * 0.4);
    const style = { fontSize: "14px", color: "#666" };
    this.add
      .text(GAME_WIDTH * 0.25, GAME_HEIGHT * 0.2, "JUMP", style)
      .setOrigin(0.5);
    this.add
      .text(GAME_WIDTH * 0.25, GAME_HEIGHT * 0.7, "MOVE", style)
      .setOrigin(0.5);
    this.add
      .text(GAME_WIDTH * 0.75, GAME_HEIGHT * 0.5, "AIM+FIRE", style)
      .setOrigin(0.5);
    gfx.setDepth(-1);
  }

  update(time: number) {
    this.player.update(time);
    const left =
      this.cursors?.left.isDown ||
      this.wasd?.A.isDown ||
      this.leftStick.x < 0;
    const right =
      this.cursors?.right.isDown ||
      this.wasd?.D.isDown ||
      this.leftStick.x > 0;
    const jump = this.spaceKey?.isDown;
    if (left) {
      this.player.moveLeft();
    } else if (right) {
      this.player.moveRight();
    } else {
      this.player.stopHorizontal();
    }
    if (jump) {
      this.player.jump();
    }
    if (this.player.getIsFiring()) {
      this.fireBullet();
    }
  }
}
