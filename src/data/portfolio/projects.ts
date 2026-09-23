import type { GameDevelopment, Project } from "@/types/portfolio";

export const projects = [
  {
    id: "tailor-pricing", title: "Tailor Pricing Platform", status: "Active personal project",
    description: "A full-stack application designed to help garment makers calculate materials, production costs, pricing and margins.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    id: "interactive-portfolio", title: "Interactive Portfolio", status: "In development",
    description: "An explorable professional portfolio built as a small pixel-art world. Visitors can discover experience, projects and skills by walking through the environment or use a traditional quick-navigation interface.",
    stack: ["Next.js", "React", "TypeScript", "Phaser"],
  },
  {
    id: "timeless-island", title: "Timeless Island", status: "In development",
    description: "An original 2D game project centered on exploration, community and a mysterious island disconnected from time.",
    stack: ["Unity", "C#", "Game Design"],
  },
] as const satisfies readonly Project[];

export const gameDevelopment = {
  heading: "Game Lab",
  paragraphs: [
    "Software engineering is my profession. Game development is where I'm becoming a beginner again.",
    "I'm currently learning Unity, C# and game design while developing experiments toward my first original game.",
  ],
  featuredProjectId: "timeless-island",
} as const satisfies GameDevelopment;
