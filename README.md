# Alirio Angel — Portfolio

A professional portfolio with a cozy outdoor prototype built with Next.js App Router, TypeScript, Tailwind CSS, and Phaser 3. All world graphics are temporary, procedural placeholders. No external art or fonts are fetched.

## Development

Use Node.js 20.9+ and pnpm (developed with Node 24 and pnpm 11).

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Click or tab into the game, then move with WASD or arrow keys. Tab leaves the game. Quick Portfolio opens a spacious React portfolio with professional experience, projects, skills, Game Lab, achievements, and contact positioning. `/portfolio` offers the same content as a standalone page without loading Phaser. Approach a labeled building or the central Quest Board and press E when the React hint appears to open the corresponding portfolio section. Escape closes the panel and returns focus to the game. Interiors are not implemented. On mobile, use Quick Portfolio; touch movement is not part of this milestone.

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
```

## Architecture

- `src/app`: server-rendered page, metadata, and global styles.
- `src/components/game`: React HUD and game lifecycle. Phaser and its config are imported only inside an effect, never during SSR. A resize observer resizes the existing instance; unmount destroys it.
- `src/components/portfolio` and `src/data`: shared portfolio presentation, a native modal dialog, and typed professional content. `src/types/portfolio.ts` defines the content model; `src/data/portfolio/` contains profile/contact, experience, software projects, separate game-design projects, skills, and achievements. Software and game projects use flexible string IDs; game-design stages and planned technology are separate from implementation status. Edit these files to update copy without touching the UI.
- `src/game/config`, `scenes`, `entities`: Phaser configuration, boot/world scenes, and normalized Arcade Physics player movement.
- `src/game/world`: replaceable procedural world renderer.
- `src/game/constants`: world dimensions, palette, locations, and texture identifiers.
- `src/game/events`: per-instance typed bridge for readiness, input ownership, nearby location, and portfolio-open events.
- `src/game/constants/worldLocations.ts`: shared art positions, portfolio destinations, prompts, and circular interaction areas.
- `src/game/systems`: nearest-zone detection and edge-triggered E interaction. Input locks synchronously before notifying React; React restores keyboard ownership through focus on close.
- `tests/interactions.test.mjs`: proximity, overlap selection, mapping, and event cleanup tests using the built-in Node test runner (Node 22.18+ or 24).

The world is 1600 × 1200 units. The camera follows smoothly within world bounds. Buildings are visual placeholders, without interiors or building collisions. Keyboard capture is disabled outside the focused viewport and while the modal is open.

## Manual smoke check

Confirm one canvas appears, movement works in all eight directions at consistent speed, and the camera stops at the map edges. Resize the browser and confirm the player position persists. Open and close Quick Portfolio using the mouse and Escape; verify focus returns and movement stops while the modal is open. Check the layout at desktop and phone widths, and inspect the browser console for errors.

## Milestone 2 checks

Walk to Home, Projects, Experience, Skills, Game Lab, Contact, and Quest Board. Confirm one prompt appears, E opens the matching section, and leaving the zone clears the prompt. Hold movement while opening a panel: the player must stop. Close with Escape, confirm focus returns to the game, and move again. E outside a zone must do nothing. Open Quick Portfolio after a world interaction and confirm it starts at the top.

Quick Portfolio and `/portfolio` share `PortfolioContent`; neither requires a running game. Check 320px mobile scrolling and try Quick Portfolio with game initialization blocked. Verify navigation away from and back to the village creates only one canvas.

The software Projects section currently contains Interactive Portfolio. Game Lab describes Saving Cobblestone as game design in pre-production, on hold, with completed design work and explicitly unimplemented gameplay. There is no public GDD or playable-game claim.

## Interface themes

Light/Dark changes only the React interface; the Phaser world's daytime palette stays independent. Semantic colors live in `src/app/theme.css`. A small inline script in the root layout resolves a saved `alirio-theme` preference or `prefers-color-scheme` before the body is painted. Without JavaScript, CSS follows the system preference.

The selector is available in the header, Quick Portfolio, and `/portfolio`. Selection persists in localStorage and synchronizes across tabs. System changes are followed until an explicit preference is selected; clearing the stored preference restores system behavior. Blocked storage still allows changing the theme for the current visit. Theme listeners and selector observers clean up on unmount.
