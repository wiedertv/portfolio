import * as Phaser from "phaser";
import { COLORS } from "@/game/constants/gameConstants";
import type { GameEvents } from "@/game/events/gameEvents";
import { BootScene } from "@/game/scenes/BootScene";
import { WorldScene } from "@/game/scenes/WorldScene";

export function createGameConfig(parent: HTMLDivElement, events: GameEvents): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    parent,
    backgroundColor: COLORS.grass,
    pixelArt: true,
    scale: { mode: Phaser.Scale.RESIZE, width: parent.clientWidth, height: parent.clientHeight },
    physics: { default: "arcade", arcade: { debug: false } },
    scene: [BootScene, new WorldScene(events)],
    render: { antialias: false, roundPixels: true },
  };
}
