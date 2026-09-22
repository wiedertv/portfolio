import * as Phaser from "phaser";
import { PLAYER, TEXTURES } from "@/game/constants/gameConstants";

export class Player extends Phaser.Physics.Arcade.Sprite {
  private readonly arrows: Phaser.Types.Input.Keyboard.CursorKeys;
  private readonly wasd: Record<"up" | "left" | "down" | "right", Phaser.Input.Keyboard.Key>;
  private readonly direction = new Phaser.Math.Vector2();

  constructor(scene: Phaser.Scene) {
    super(scene, PLAYER.spawnX, PLAYER.spawnY, TEXTURES.player);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true).setDepth(10);
    this.setSize(20, 18).setOffset(6, 20);
    const keyboard = scene.input.keyboard!;
    this.arrows = keyboard.createCursorKeys();
    this.wasd = {
      up: keyboard.addKey("W"), left: keyboard.addKey("A"),
      down: keyboard.addKey("S"), right: keyboard.addKey("D"),
    };
  }

  updateMovement(enabled: boolean) {
    this.direction.set(0, 0);
    if (enabled) {
      this.direction.set(
        Number(this.arrows.right.isDown || this.wasd.right.isDown) - Number(this.arrows.left.isDown || this.wasd.left.isDown),
        Number(this.arrows.down.isDown || this.wasd.down.isDown) - Number(this.arrows.up.isDown || this.wasd.up.isDown),
      ).normalize().scale(PLAYER.speed);
    }
    this.setVelocity(this.direction.x, this.direction.y);
  }
}
