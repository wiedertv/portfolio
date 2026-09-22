import type { NextConfig } from "next";

// Preserve the repository-owned contributor guide when starting the dev server.
const nextConfig: NextConfig = { agentRules: false };
export default nextConfig;
