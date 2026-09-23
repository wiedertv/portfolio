import type { Project, ProjectStatus } from "@/types/portfolio";

export const projectStatusLabels = {
  active: "Active",
  completed: "Completed",
  "on-hold": "On hold",
} as const satisfies Record<ProjectStatus, string>;

export const projects: readonly Project[] = [
  {
    id: "interactive-portfolio",
    title: "Interactive Portfolio",
    status: "active",
    description: "An explorable professional portfolio built as a small pixel-art world. Visitors can discover my experience, projects and skills by exploring the environment or switch instantly to a traditional portfolio experience.",
    stack: ["Next.js", "React", "TypeScript", "Phaser"],
    links: { github: "https://github.com/wiedertv/portfolio" },
  },
];
