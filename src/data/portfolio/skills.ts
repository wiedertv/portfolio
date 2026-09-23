import type { SkillCategory } from "@/types/portfolio";

export const skillCategories = [
  { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS", "Data Visualization"] },
  { name: "Backend", skills: ["Node.js", "NestJS", "Express", "REST", "GraphQL", "Domain-Driven Design", "Event-Driven Systems"] },
  { name: "Data", skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Query Optimization"] },
  { name: "Platform", skills: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Jenkins", "Datadog", "Prometheus", "Grafana"] },
  { name: "Additional", skills: ["C# / .NET", "Python", "Solidity", "Web3", "Unity"] },
] as const satisfies readonly SkillCategory[];
