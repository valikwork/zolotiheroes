import * as Phaser from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite {
  private speed = 200;
  private jumpForce = -500;
  private aimAngle = 0;
  private isFiring = false;
  private fireRate = 200;
  private lastFired = 0;
  private invincible = false;
  private invincibleTimer = 0;
  private invincibleDuration = 1000;

  constructor(scene: Phaser.Scene, x: number, y: number, headTextureKey?: string) {
    super(scene, x, y, headTextureKey ?? "player-placeholder");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.setBounce(0);

    // If no head texture, generate placeholder rectangle
    if (!headTextureKey || !scene.textures.exists(headTextureKey)) {
      if (!scene.textures.exists("player-placeholder")) {
        const graphics = scene.add.graphics();
        graphics.fillStyle(0x3b82f6, 1);
        graphics.fillRect(0, 0, 48, 48);
        graphics.generateTexture("player-placeholder", 48, 48);
        graphics.destroy();
      }
      this.setTexture("player-placeholder");
    }

    this.setDisplaySize(48, 48);
    this.setSize(this.width, this.height);
  }

  setAim(angle: number) {
    this.aimAngle = angle;
  }

  setFiring(firing: boolean) {
    this.isFiring = firing;
  }

  getAimAngle(): number {
    return this.aimAngle;
  }

  getIsFiring(): boolean {
    return this.isFiring;
  }

  getLastFired(): number {
    return this.lastFired;
  }

  getFireRate(): number {
    return this.fireRate;
  }

  setLastFired(time: number) {
    this.lastFired = time;
  }

  isInvincible(): boolean {
    return this.invincible;
  }

  hit(): boolean {
    if (this.invincible) return false;
    this.invincible = true;
    this.invincibleTimer = this.scene.time.now;
    this.scene.tweens.add({
      targets: this,
      alpha: 0.3,
      duration: 100,
      yoyo: true,
      repeat: 4,
      onComplete: () => {
        this.alpha = 1;
      },
    });
    return true;
  }

  moveLeft() {
    this.setVelocityX(-this.speed);
    this.setFlipX(true);
  }

  moveRight() {
    this.setVelocityX(this.speed);
    this.setFlipX(false);
  }

  stopHorizontal() {
    this.setVelocityX(0);
  }

  jump() {
    if (this.body && (this.body as Phaser.Physics.Arcade.Body).blocked.down) {
      this.setVelocityY(this.jumpForce);
    }
  }

  update(time: number) {
    if (
      this.invincible &&
      time - this.invincibleTimer > this.invincibleDuration
    ) {
      this.invincible = false;
    }
  }
}
