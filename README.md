# Alirio Angel — Portfolio

A professional portfolio with a cozy outdoor prototype built with Next.js App Router, TypeScript, Tailwind CSS, and Phaser 3. All world graphics are temporary, procedural placeholders. No external art or fonts are fetched.

## Development

Use Node.js 20.9+ and pnpm (developed with Node 24 and pnpm 11).

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Click or tab into the game, then move with WASD or arrow keys. Tab leaves the game. Quick Portfolio opens a spacious React portfolio with professional experience, projects, skills, Game Lab, achievements, and contact positioning. `/portfolio` offers the same content as a standalone page without loading Phaser. E is reserved for the next milestone; interiors and interactions are not implemented. On mobile, use Quick Portfolio; touch movement is not part of this milestone.

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Architecture

- `src/app`: server-rendered page, metadata, and global styles.
- `src/components/game`: React HUD and game lifecycle. Phaser and its config are imported only inside an effect, never during SSR. A resize observer resizes the existing instance; unmount destroys it.
- `src/components/portfolio` and `src/data`: shared portfolio presentation, a native modal dialog, and typed professional content. `src/types/portfolio.ts` defines the content model; `src/data/portfolio/` contains profile/contact, experience, projects/Game Lab, skills, and achievements. Edit these files to update copy without touching the UI.
- `src/game/config`, `scenes`, `entities`: Phaser configuration, boot/world scenes, and normalized Arcade Physics player movement.
- `src/game/world`: replaceable procedural world renderer.
- `src/game/constants`: world dimensions, palette, locations, and texture identifiers.
- `src/game/events`: per-instance typed event bridge for readiness and input ownership, without a state library.

The world is 1600 × 1200 units. The camera follows smoothly within world bounds. Buildings are visual placeholders, without interiors or building collisions. Keyboard capture is disabled outside the focused viewport and while the modal is open.

## Manual smoke check

Confirm one canvas appears, movement works in all eight directions at consistent speed, and the camera stops at the map edges. Resize the browser and confirm the player position persists. Open and close Quick Portfolio using the mouse and Escape; verify focus returns and movement stops while the modal is open. Check the layout at desktop and phone widths, and inspect the browser console for errors.
