export const WORLD = { width: 1600, height: 1200 } as const;
export const PLAYER = { speed: 240, spawnX: 800, spawnY: 720 } as const;
export const SCENES = { boot: "Boot", world: "World" } as const;
export const TEXTURES = { player: "temporary-player" } as const;
export const COLORS = {
  grass: 0x85976d,
  grassLight: 0x94a27a,
  grassDark: 0x74875f,
  path: 0xd2bd91,
  pathEdge: 0xb5a47e,
  navy: 0x28394a,
  cream: 0xf8efd9,
  brown: 0x795b47,
} as const;
