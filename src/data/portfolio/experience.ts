import type { Experience } from "@/types/portfolio";

export const experiences: readonly Experience[] = [
  {
    id: "bairesdev", company: "BairesDev", role: "Senior Software Engineer", period: "2024 — Present",
    description: "Building production systems for international enterprise clients.",
    highlights: [
      "Building dynamic React charting experiences over large datasets, where rendering performance and interaction responsiveness are core constraints.",
      "Designed subscription and payment infrastructure using NestJS, Stripe, MongoDB and idempotent webhook processing.",
      "Reduced redundant compute requests by approximately 40% through caching.",
      "Reduced database CPU load by approximately 30% by identifying missing indexes and improving Prisma access patterns.",
      "Helped refactor a monolithic service into independently deployable domain-oriented services using DDD.",
    ],
    stack: ["React", "TypeScript", "Node.js", "NestJS", "MongoDB", "PostgreSQL", "Redis", "Prisma", "Stripe", "Docker", "AWS"],
  },
  {
    id: "dcorp", company: "DCorp", role: "Software Engineer", period: "2022 — 2023",
    highlights: [
      "Built blockchain platforms spanning smart contracts, Node.js services and Next.js applications.",
      "Migrated an Ethereum-based platform to Polygon, drastically reducing transaction costs.",
      "Optimized smart-contract execution by approximately 15–20%.",
      "Built middleware connecting blockchain state with application databases and an Unreal Engine client.",
    ],
    stack: ["Next.js", "React", "NestJS", "Node.js", "Solidity", "Ethers.js", "Polygon", "Ethereum", "Unreal Engine"],
  },
  {
    id: "no-solo-un-jpg", company: "No Solo un JPG", role: "Software Engineer", period: "2021 — 2022",
    highlights: [
      "Built Next.js frontends and NestJS services for consumer platforms.",
      "Implemented real-time asset verification.",
      "Built protected video-course delivery.",
      "Built gamified learning modules associated with a 40% increase in user retention.",
      "Automated CI/CD workflows, saving approximately five hours of manual deployment work per week.",
    ],
    stack: ["Next.js", "React", "NestJS", "Node.js", "TypeScript", "Solidity", "CI/CD"],
  },
  {
    id: "shokworks", company: "Shokworks", role: "Backend Engineer", period: "2021",
    highlights: [
      "Built scalable cart APIs sustaining 500+ requests per minute.",
      "Optimized Redis caching and PostgreSQL queries.",
      "Avoided approximately $1k/month in premature infrastructure scaling.",
      "Maintained 99.95% API uptime through launch month.",
    ],
    stack: ["Node.js", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
  },
  {
    id: "aluxion", company: "Aluxion", role: "Backend Engineer", period: "2020 — 2021",
    highlights: [
      "Worked on high-traffic healthcare and content platforms.",
      "Migrated REST endpoints toward GraphQL, reducing data over-fetching by approximately 50%.",
      "Optimized complex SQL queries, reducing server response times by approximately 35%.",
    ],
    stack: ["Node.js", "NestJS", "Next.js", "React", "GraphQL", "MongoDB", "PostgreSQL"],
  },
];
