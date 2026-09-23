export type Profile = {
  name: string;
  title: string;
  location: string;
  workMode: string;
  summary: string;
  about: { heading: string; paragraphs: readonly string[] };
  contact: { heading: string; text: string };
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  highlights: readonly string[];
  stack: readonly string[];
};

export type ProjectStatus = "active" | "completed" | "on-hold";
export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  description: string;
  stack: readonly string[];
  links?: { live?: string; github?: string };
};

export type GameProjectStage = "concept" | "pre-production" | "prototype" | "production";
export type GameProjectStatus = "active" | "on-hold" | "completed";
export type GameProject = {
  id: string;
  title: string;
  category: "Game Design";
  stage: GameProjectStage;
  status: GameProjectStatus;
  description: string;
  details: string;
  completedDesignWork: readonly string[];
  notImplemented: readonly string[];
  plannedStack: readonly string[];
};

export type SkillCategory = {
  name: "Frontend" | "Backend" | "Data" | "Platform" | "Additional";
  skills: readonly string[];
};

export type Achievement = { id: string; title: string };
export type GameDevelopment = {
  heading: string;
  paragraphs: readonly string[];
  projects: readonly GameProject[];
};

export type SectionId = "about" | "experience" | "projects" | "skills" | "game-lab" | "achievements" | "contact";
export type PortfolioSection = { id: SectionId; title: string };
