import * as Phaser from "phaser";
import { WORLD_LOCATIONS } from "@/game/constants/worldLocations";
import type { GameEvents } from "@/game/events/gameEvents";
import type { WorldLocation } from "@/game/types/world";
import { findNearbyLocation } from "./findNearbyLocation";

export class InteractionSystem {
  private nearby: WorldLocation | null = null;
  private readonly interactKey: Phaser.Input.Keyboard.Key;

  constructor(private readonly keyboard: Phaser.Input.Keyboard.KeyboardPlugin, private readonly bridge: GameEvents) {
    this.interactKey = keyboard.addKey("E");
  }

  update(position: { x: number; y: number }, inputEnabled: boolean) {
    const next = findNearbyLocation(position, WORLD_LOCATIONS);
    if (next?.id !== this.nearby?.id) {
      this.nearby = next;
      this.bridge.emit("location:nearby", next ? { id: next.id, label: next.label, section: next.section, prompt: next.prompt } : null);
    }
    const pressed = Phaser.Input.Keyboard.JustDown(this.interactKey);
    if (inputEnabled && next && pressed && !this.interactKey.originalEvent?.repeat) {
      // Lock synchronously before React renders the modal, including this physics frame.
      this.bridge.emit("inputEnabled", false);
      this.bridge.emit("portfolio:open", { section: next.section });
    }
  }

  destroy() {
    this.keyboard.removeKey(this.interactKey, true, true);
    this.nearby = null;
    this.bridge.emit("location:nearby", null);
  }
}
