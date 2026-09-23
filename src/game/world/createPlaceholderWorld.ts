import * as Phaser from "phaser";
import { COLORS, WORLD } from "@/game/constants/gameConstants";
import { BUILDINGS, QUEST_BOARD } from "@/game/constants/worldLocations";

export function createPlaceholderWorld(scene: Phaser.Scene) {
  const art = scene.add.graphics();
  art.fillStyle(COLORS.grass).fillRect(0, 0, WORLD.width, WORLD.height);
  const random = new Phaser.Math.RandomDataGenerator(["alirio-village"]);
  for (let i = 0; i < 1800; i++) {
    const x = random.between(12, WORLD.width - 12);
    const y = random.between(12, WORLD.height - 12);
    art.fillStyle(i % 2 ? COLORS.grassLight : COLORS.grassDark, 0.6);
    art.fillRect(x, y, 3, 7).fillRect(x + 5, y + 3, 3, 4);
  }
  art.fillStyle(COLORS.pathEdge).fillRoundedRect(359, 540, 882, 124, 24);
  art.fillStyle(COLORS.path).fillRoundedRect(365, 546, 870, 112, 20);
  for (const location of BUILDINGS) {
    const top = Math.min(location.y, 600);
    art.fillStyle(COLORS.path).fillRect(location.x - 30, top, 60, Math.abs(location.y - 600));
    art.fillStyle(COLORS.navy, 0.16).fillRect(location.x - 94, location.y - 52, 200, 136);
    art.fillStyle(location.color).fillRect(location.x - 100, location.y - 70, 200, 140);
    art.lineStyle(4, COLORS.brown).strokeRect(location.x - 100, location.y - 70, 200, 140);
    art.fillStyle(COLORS.brown).fillRect(location.x - 110, location.y - 80, 220, 25);
    art.fillStyle(COLORS.navy).fillRect(location.x - 15, location.y + 30, 30, 40);
    art.fillStyle(COLORS.cream).fillRect(location.x - 70, location.y - 30, 24, 28).fillRect(location.x + 46, location.y - 30, 24, 28);
    scene.add.text(location.x, location.y + 100, location.label, {
      fontFamily: "monospace", fontSize: "18px", color: "#28394a",
      backgroundColor: "#f8efd9", padding: { x: 12, y: 6 },
    }).setOrigin(0.5);
  }
  const { x, y } = QUEST_BOARD;
  art.fillStyle(COLORS.path).fillCircle(x, y, 132);
  art.fillStyle(COLORS.brown).fillRect(x - 57, y - 55, 10, 100).fillRect(x + 47, y - 55, 10, 100);
  art.fillStyle(COLORS.navy).fillRect(x - 72, y - 68, 144, 76);
  art.fillStyle(COLORS.cream).fillRect(x - 59, y - 55, 118, 48);
  scene.add.text(x, y - 31, QUEST_BOARD.label.toUpperCase(), {
    fontFamily: "monospace", fontSize: "14px", color: "#28394a",
  }).setOrigin(0.5);
}
