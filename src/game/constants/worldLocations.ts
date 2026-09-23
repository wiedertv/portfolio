import type { WorldLocation } from "@/game/types/world";

function building(location: Omit<WorldLocation, "kind" | "interactionArea">): WorldLocation {
  return { ...location, kind: "building", interactionArea: { x: location.x, y: location.y + 100, radius: 85 } };
}

export const BUILDINGS: readonly WorldLocation[] = [
  building({ id: "home", label: "Home", section: "about", prompt: "View About", x: 430, y: 300, color: 0xb88669 }),
  building({ id: "projects", label: "Projects", section: "projects", prompt: "View Projects", x: 800, y: 260, color: 0x778997 }),
  building({ id: "experience", label: "Experience", section: "experience", prompt: "View Experience", x: 1170, y: 300, color: 0xa88e6b }),
  building({ id: "skills", label: "Skills", section: "skills", prompt: "View Skills", x: 430, y: 910, color: 0x7c977e }),
  building({ id: "game-lab", label: "Game Lab", section: "game-lab", prompt: "View Game Lab", x: 800, y: 960, color: 0x918498 }),
  building({ id: "contact", label: "Contact", section: "contact", prompt: "View Contact", x: 1170, y: 910, color: 0xb88b73 }),
];

export const QUEST_BOARD: WorldLocation = {
  id: "quest-board", label: "Quest Board", section: "achievements", prompt: "View Achievements",
  kind: "board", x: 800, y: 600, color: 0x795b47,
  interactionArea: { x: 800, y: 650, radius: 60 },
};

export const WORLD_LOCATIONS: readonly WorldLocation[] = [...BUILDINGS, QUEST_BOARD];
