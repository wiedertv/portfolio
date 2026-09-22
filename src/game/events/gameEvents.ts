type GameEventMap = {
  ready: undefined;
  inputEnabled: boolean;
};

// Each mounted game gets its own bridge; this module has no browser or Phaser imports.
export function createGameEvents() {
  const target = new EventTarget();
  return {
    emit<K extends keyof GameEventMap>(type: K, detail: GameEventMap[K]) {
      target.dispatchEvent(new CustomEvent(type, { detail }));
    },
    on<K extends keyof GameEventMap>(type: K, handler: (value: GameEventMap[K]) => void) {
      const listener = (event: Event) => handler((event as CustomEvent<GameEventMap[K]>).detail);
      target.addEventListener(type, listener);
      return () => target.removeEventListener(type, listener);
    },
  };
}

export type GameEvents = ReturnType<typeof createGameEvents>;
