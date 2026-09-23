import type { PortfolioSection } from "@/types/portfolio";

export { profile, profileAvailability } from "./portfolio/profile";
export { experiences } from "./portfolio/experience";
export { projects, projectStatusLabels } from "./portfolio/projects";
export { gameDevelopment, gameStageLabels } from "./portfolio/gameDevelopment";
export { skillCategories } from "./portfolio/skills";
export { achievements } from "./portfolio/achievements";

export const portfolioSections = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "game-lab", title: "Game Lab" },
  { id: "achievements", title: "Quest Board" },
  { id: "contact", title: "Contact" },
] as const satisfies readonly PortfolioSection[];
