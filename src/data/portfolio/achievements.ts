import type { Achievement } from "@/types/portfolio";

export const achievements = [
  { id: "enterprise", title: "Ship production systems used at enterprise scale" },
  { id: "database-cpu", title: "Reduce database CPU usage by approximately 30%" },
  { id: "compute", title: "Reduce unnecessary compute requests by approximately 40%" },
  { id: "launch-traffic", title: "Sustain APIs through 500+ RPM launch traffic" },
  { id: "uptime", title: "Maintain 99.95% API uptime through launch month" },
  { id: "over-fetching", title: "Reduce API data over-fetching by approximately 50%" },
  { id: "full-stack", title: "Build products spanning smart contracts, backend and frontend" },
  { id: "remote-teams", title: "Work remotely across international engineering teams" },
] as const satisfies readonly Achievement[];
