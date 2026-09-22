# Alirio Portfolio

## Project vision

This is the personal portfolio of Alirio Angel, Fullstack Engineer.

The portfolio is presented as an original cozy pixel-art interactive world inspired by European villages and cozy adventure/farming games.

It must NOT copy maps, sprites, characters, UI, assets, or copyrighted artwork from Stardew Valley, Minecraft, or any existing game.

The visual direction is:

- cozy pixel art
- warm colors
- European architecture
- subtle Italian and Estonian influences
- professional but playful
- top-down exploration
- small village
- autumn / warm seasonal atmosphere

The portfolio must work for two kinds of visitors:

1. People who want to explore the game world.
2. Recruiters who want immediate access to professional information.

Therefore the game experience must always coexist with a fast traditional portfolio UI.

---

## Owner

Name: Alirio Angel

Primary role:

Fullstack Engineer

Secondary interests:

- Game Development
- Software Architecture
- Backend Engineering
- Frontend Engineering
- Cloud / DevOps
- AI experiments

---

## Core world locations

The first version of the village should eventually contain:

- Home → About Me
- Projects Workshop → Projects
- Experience Hall → Professional Experience
- Skills Greenhouse → Skills / Technologies
- Game Lab → Game Development
- Quest Board → Achievements / milestones
- Mailbox / Contact House → Contact
- Social / external links area later

Do not build all interiors immediately.

Start with the outdoor hub.

---

## Technology

Use:

- Next.js
- React
- TypeScript
- App Router
- Phaser
- Tailwind CSS
- pnpm

Avoid unnecessary dependencies.

Do not introduce a backend unless the feature requires one.

Portfolio content should initially live in typed TypeScript data files.

---

## Architecture

React/Next.js owns:

- page layout
- portfolio content
- modals
- drawers
- navigation
- accessibility
- responsive UI
- SEO
- quick portfolio navigation

Phaser owns:

- world
- player
- movement
- camera
- collisions
- interaction areas
- environmental animation

Do not render professional content directly inside Phaser if React can render it better.

Phaser should communicate with React through a small event bridge.

---

## Code quality

Use strict TypeScript.

Prefer:

- small components
- clear domain names
- explicit types
- reusable systems
- simple architecture

Avoid:

- giant React components
- giant Phaser scenes
- `any`
- magic strings spread across the codebase
- premature abstractions
- unnecessary state libraries
- unnecessary packages

Keep game constants in dedicated files.

---

## Proposed source organization

Prefer a structure similar to:

src/
  app/
  components/
    game/
    portfolio/
    ui/
  game/
    config/
    scenes/
    entities/
    systems/
    events/
    constants/
  data/
  types/

public/
  assets/
    character/
    tiles/
    buildings/
    props/
    ui/

The exact organization may evolve if there is a clear technical reason.

---

## Game requirements

The game must eventually support:

- WASD movement
- arrow-key movement
- camera follow
- collision
- interaction with E
- interaction indicators
- world locations
- player animations
- responsive scaling

Phaser must only run client-side.

Never allow Phaser browser APIs to execute during server-side rendering.

---

## Portfolio UX

There must be a visible "Quick Portfolio" option.

A visitor must never be forced to play the game to access:

- About
- Experience
- Projects
- Skills
- Contact

Game interaction should enhance navigation, not block it.

---

## Responsive behavior

Desktop is the primary game experience.

Tablet should remain functional.

On mobile, prioritize usability over trying to reproduce the exact desktop game layout.

---

## Visual assets

We will create original assets separately.

Until real assets exist:

- use clearly marked temporary placeholders
- keep asset paths centralized
- do not download random copyrighted sprites
- do not use Stardew Valley assets
- do not use Minecraft assets

Temporary graphics should be easy to replace later.

---

## Working style

Before making major architectural changes:

1. inspect the existing code
2. explain the intended change briefly
3. make the smallest coherent implementation
4. run validation
5. report what changed

For implementation tasks:

- run lint
- run type checking when available
- fix errors introduced by the change

Do not rewrite unrelated files.

---

## Current development strategy

Build vertically.

Milestone 1:
Playable technical prototype.

Milestone 2:
Portfolio interaction system.

Milestone 3:
Real character assets.

Milestone 4:
Village art / tilemap.

Milestone 5:
Portfolio content.

Milestone 6:
Polish, sound, effects, responsive behavior and deployment.