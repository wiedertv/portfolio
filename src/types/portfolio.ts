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

export type ProjectId = "tailor-pricing" | "interactive-portfolio" | "timeless-island";
export type Project = {
  id: ProjectId;
  title: string;
  status: "Active personal project" | "In development";
  description: string;
  stack: readonly string[];
};

export type SkillCategory = {
  name: "Frontend" | "Backend" | "Data" | "Platform" | "Additional";
  skills: readonly string[];
};

export type Achievement = { id: string; title: string };
export type GameDevelopment = {
  heading: string;
  paragraphs: readonly string[];
  featuredProjectId: ProjectId;
};

export type SectionId = "about" | "experience" | "projects" | "skills" | "game-development" | "achievements" | "contact";
export type PortfolioSection = { id: SectionId; title: string };
