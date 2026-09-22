import * as Phaser from "phaser";
import { COLORS, SCENES, TEXTURES } from "@/game/constants/gameConstants";

export class BootScene extends Phaser.Scene {
  constructor() {
    super(SCENES.boot);
  }

  create() {
    // All prototype art is generated locally; replace this texture when original sprites arrive.
    const art = this.add.graphics();
    art.fillStyle(0x28394a, 0.2).fillEllipse(16, 35, 26, 8);
    art.fillStyle(COLORS.navy).fillRect(7, 18, 18, 15);
    art.fillStyle(0xd6a67e).fillRect(9, 7, 14, 13);
    art.fillStyle(COLORS.brown).fillRect(7, 4, 18, 7);
    art.fillStyle(0xe5b768).fillRect(6, 19, 20, 5);
    art.fillStyle(COLORS.navy).fillRect(8, 32, 6, 6).fillRect(19, 32, 6, 6);
    art.generateTexture(TEXTURES.player, 32, 40);
    art.destroy();
    this.scene.start(SCENES.world);
  }
}
