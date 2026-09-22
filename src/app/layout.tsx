import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alirio Angel — Fullstack Engineer",
  description: "Explore Alirio Angel's portfolio: a cozy interactive village for fullstack engineering and game development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a>{children}</body></html>;
}
