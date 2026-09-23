import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Alirio Angel — Fullstack Engineer",
  description: "Alirio Angel — Fullstack Engineer in Italy. 6+ years building scalable software with TypeScript, React and Node.js, spanning frontend systems and backend architecture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a>{children}</body></html>;
}
