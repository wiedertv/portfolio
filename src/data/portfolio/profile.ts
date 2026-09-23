import type { Profile } from "@/types/portfolio";

export const profile = {
  name: "Alirio Angel",
  title: "Fullstack Engineer",
  location: "Italy",
  workMode: "Remote / CET",
  summary: "6+ years building reliable, high-performance software with TypeScript, React and Node.js. Product engineering, frontend systems and backend architecture for data-intensive applications.",
  about: {
    heading: "Hi, I'm Alirio.",
    paragraphs: [
      "I'm a Fullstack Engineer focused on building reliable, high-performance software with TypeScript, React and Node.js.",
      "Over the last 6+ years I've worked across frontend architecture, backend systems, databases and cloud infrastructure, often on products where performance, scalability or reliability are part of the actual problem.",
      "I enjoy understanding how systems work underneath the abstraction: why an API is slow, why a UI struggles with large datasets, why a deployment pipeline creates friction, or how an architecture can be simplified.",
      "Outside of enterprise software, I'm exploring game development and building my own projects.",
      "I like building things.",
    ],
  },
  contact: {
    heading: "Let's build something.",
    text: "I'm interested in challenging engineering work involving TypeScript, React, Node.js, backend architecture, data-intensive applications and product engineering.",
  },
} as const satisfies Profile;
