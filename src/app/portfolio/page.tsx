import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { PortfolioContent } from "@/components/portfolio/PortfolioContent";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-toolbar"><Link href="/" className="portfolio-page-link">← Back to village</Link><ThemeToggle /></header>
      <main id="main-content"><PortfolioContent /></main>
    </div>
  );
}
