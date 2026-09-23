import Link from "next/link";
import { PortfolioContent } from "@/components/portfolio/PortfolioContent";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-toolbar"><Link href="/" className="portfolio-page-link">← Back to village</Link><span className="eyebrow">THE PORTFOLIO</span></header>
      <main id="main-content"><PortfolioContent /></main>
    </div>
  );
}
