import type { GameDevelopment, GameProjectStage } from "@/types/portfolio";

export const gameStageLabels = {
  concept: "Concept",
  "pre-production": "Pre-production",
  prototype: "Prototype",
  production: "Production",
} as const satisfies Record<GameProjectStage, string>;

export const gameDevelopment = {
  heading: "Game Lab",
  paragraphs: [
    "Software engineering is my profession.",
    "Game development is where I'm learning a different kind of software design.",
    "I'm exploring game development through systems design, game design and Unity.",
  ],
  projects: [{
    id: "saving-cobblestone",
    title: "Saving Cobblestone",
    category: "Game Design",
    stage: "pre-production",
    status: "on-hold",
    description: "An original cozy 2D guild-management game concept about founding and growing an adventurers' guild in a forgotten frontier town.",
    details: "The design explores how guild management, exploration, gathering, combat and delegation can work together inside a cozy life-sim structure.",
    completedDesignWork: ["Game concept", "Core gameplay loop", "Systems design", "Control architecture", "Art direction planning", "Development roadmap"],
    notImplemented: ["Playable prototype", "Production code", "Vertical slice"],
    plannedStack: ["Unity 2D", "C#"],
  }],
} as const satisfies GameDevelopment;
