import * as Phaser from "phaser";
import { GAME_WIDTH } from "../config";

export class HUDScene extends Phaser.Scene {
  private healthBar!: Phaser.GameObjects.Graphics;
  private scoreText!: Phaser.GameObjects.Text;
  private enemyText!: Phaser.GameObjects.Text;
  private currentHealth = 100;
  private currentScore = 0;
  private enemiesRemaining = 0;

  constructor() {
    super({ key: "HUDScene" });
  }

  init(data: { health: number; score: number; enemiesRemaining: number }) {
    this.currentHealth = data.health;
    this.currentScore = data.score;
    this.enemiesRemaining = data.enemiesRemaining;
  }

  create() {
    this.add.rectangle(110, 20, 200, 16, 0x374151).setOrigin(0, 0.5);
    this.healthBar = this.add.graphics();
    this.drawHealthBar();
    this.add.text(10, 12, "HP", {
      fontSize: "14px",
      color: "#fff",
      fontStyle: "bold",
    });
    this.scoreText = this.add
      .text(GAME_WIDTH - 10, 12, `Score: ${this.currentScore}`, {
        fontSize: "16px",
        color: "#fbbf24",
        fontStyle: "bold",
      })
      .setOrigin(1, 0);
    this.enemyText = this.add
      .text(
        GAME_WIDTH / 2,
        12,
        `Enemies: ${this.enemiesRemaining}`,
        {
          fontSize: "14px",
          color: "#ef4444",
        }
      )
      .setOrigin(0.5, 0);

    const levelScene = this.scene.get("LevelScene");
    levelScene.events.on("enemyKilled", (remaining: number) => {
      this.enemiesRemaining = remaining;
      this.enemyText.setText(`Enemies: ${remaining}`);
    });
    levelScene.events.on("healthChanged", (health: number) => {
      this.currentHealth = health;
      this.drawHealthBar();
    });
    levelScene.events.on("scoreChanged", (score: number) => {
      this.currentScore = score;
      this.scoreText.setText(`Score: ${score}`);
    });
  }

  private drawHealthBar() {
    this.healthBar.clear();
    const width = (this.currentHealth / 100) * 196;
    const color =
      this.currentHealth > 50
        ? 0x22c55e
        : this.currentHealth > 25
          ? 0xeab308
          : 0xef4444;
    this.healthBar.fillStyle(color, 1);
    this.healthBar.fillRect(112, 12, width, 16);
  }
}
