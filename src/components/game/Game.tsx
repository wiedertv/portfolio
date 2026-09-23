"use client";

import { useEffect, useRef, useState } from "react";
import type * as Phaser from "phaser";
import type { SectionId } from "@/types/portfolio";
import type { NearbyLocation } from "@/game/types/world";
import { InteractionHint } from "./InteractionHint";
import { createGameEvents } from "@/game/events/gameEvents";

export function Game({ paused, onPortfolioOpen }: { paused: boolean; onPortfolioOpen: (section: SectionId) => void }) {
  const host = useRef<HTMLDivElement>(null);
  const surface = useRef<HTMLDivElement>(null);
  const bridge = useRef<ReturnType<typeof createGameEvents> | null>(null);
  const pausedRef = useRef(paused);
  const onPortfolioOpenRef = useRef(onPortfolioOpen);
  const [nearby, setNearby] = useState<NearbyLocation | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => { onPortfolioOpenRef.current = onPortfolioOpen; }, [onPortfolioOpen]);

  useEffect(() => {
    pausedRef.current = paused;
    bridge.current?.emit("inputEnabled", !paused && document.activeElement === surface.current);
  }, [paused]);

  useEffect(() => {
    let disposed = false;
    let game: Phaser.Game | undefined;
    const events = createGameEvents();
    bridge.current = events;
    const unsubscribeNearby = events.on("location:nearby", setNearby);
    const unsubscribeOpen = events.on("portfolio:open", ({ section }) => {
      if (disposed) return;
      pausedRef.current = true;
      onPortfolioOpenRef.current(section);
    });
    const unsubscribeReady = events.on("ready", () => {
      if (disposed) return;
      setStatus("ready");
      events.emit("inputEnabled", !pausedRef.current && document.activeElement === surface.current);
    });
    const observer = new ResizeObserver(() => {
      if (game?.isBooted && host.current) {
        game.scale.resize(host.current.clientWidth, host.current.clientHeight);
      }
    });
    if (host.current) observer.observe(host.current);

    async function initialize() {
      try {
        // Both imports stay inside an effect: no Phaser module executes during SSR.
        const [Phaser, { createGameConfig }] = await Promise.all([
          import("phaser"), import("@/game/config/createGameConfig"),
        ]);
        if (disposed || !host.current) return;
        game = new Phaser.Game(createGameConfig(host.current, events));
      } catch (error) {
        console.error("Unable to initialize the village", error);
        if (!disposed) setStatus("error");
      }
    }
    void initialize();
    return () => {
      disposed = true;
      observer.disconnect();
      unsubscribeReady();
      unsubscribeNearby();
      unsubscribeOpen();
      bridge.current = null;
      game?.destroy(true);
    };
  }, []);

  return (
    <div
      ref={surface}
      className="game-surface"
      tabIndex={paused ? -1 : 0}
      role="region"
      aria-label="Interactive village. Press WASD or arrow keys to move. Press E near a location to view its portfolio section. Press Tab to leave the game."
      aria-describedby="game-controls"
      onPointerDown={() => { if (!paused) surface.current?.focus(); }}
      onFocus={() => bridge.current?.emit("inputEnabled", !paused)}
      onBlur={() => bridge.current?.emit("inputEnabled", false)}
    >
      <div ref={host} className="game-canvas" aria-hidden="true" />
      {status !== "ready" && (
        <div className="game-loading" role="status">
          <span className="loading-tile" aria-hidden="true" />
          <p>{status === "loading" ? "Preparing a little corner of the world…" : "The village could not load. Quick Portfolio is still available."}</p>
        </div>
      )}
      <InteractionHint location={status === "ready" && !paused ? nearby : null} />
      <div className="world-caption" aria-hidden="true">THE VILLAGE <span> / outdoor prototype</span></div>
    </div>
  );
}
