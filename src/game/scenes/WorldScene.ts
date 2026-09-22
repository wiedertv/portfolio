import * as Phaser from "phaser";
import { SCENES, WORLD } from "@/game/constants/gameConstants";
import { Player } from "@/game/entities/Player";
import type { GameEvents } from "@/game/events/gameEvents";
import { createPlaceholderWorld } from "@/game/world/createPlaceholderWorld";

export class WorldScene extends Phaser.Scene {
  private player!: Player;
  private movementEnabled = false;

  constructor(private readonly eventsBridge: GameEvents) {
    super(SCENES.world);
  }

  create() {
    createPlaceholderWorld(this);
    this.physics.world.setBounds(0, 0, WORLD.width, WORLD.height);
    this.player = new Player(this);
    this.cameras.main.setBounds(0, 0, WORLD.width, WORLD.height);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    // Only capture movement keys while the React game surface has focus.
    this.input.keyboard!.enabled = false;
    this.input.keyboard!.disableGlobalCapture();
    const unsubscribe = this.eventsBridge.on("inputEnabled", (enabled) => {
      this.movementEnabled = enabled;
      const keyboard = this.input.keyboard!;
      keyboard.resetKeys();
      keyboard.enabled = enabled;
      if (enabled) keyboard.enableGlobalCapture();
      else keyboard.disableGlobalCapture();
      this.player.updateMovement(false);
    });
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, unsubscribe);
    this.eventsBridge.emit("ready", undefined);
  }

  update() {
    this.player.updateMovement(this.movementEnabled);
  }
}
