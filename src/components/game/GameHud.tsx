"use client";

import Link from "next/link";
import type { SectionId } from "@/types/portfolio";
import { useCallback, useState } from "react";
import { profileAvailability } from "@/data/portfolio/profile";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Game } from "@/components/game/Game";
import { QuickPortfolio } from "@/components/portfolio/QuickPortfolio";

export function GameHud() {
  const [portfolioRequest, setPortfolioRequest] = useState<{ section?: SectionId } | null>(null);
  const openSection = useCallback((section: SectionId) => setPortfolioRequest({ section }), []);
  return (
    <>
      <header className="site-header">
        <Link href="/" className="identity" aria-label="Alirio Angel homepage">
          <span className="identity-mark" aria-hidden="true">a.</span>
          <span><span className="identity-name">Alirio Angel</span><span className="identity-role">Fullstack Engineer</span></span>
        </Link>
        <div className="header-actions"><ThemeToggle /><button type="button" className="portfolio-button" onClick={() => setPortfolioRequest({})} aria-haspopup="dialog">Quick Portfolio <span aria-hidden="true">↗</span></button></div>
        <p className="header-availability">{profileAvailability.compact}</p>
      </header>
      <main id="main-content">
        <div className="intro">
          <div><p className="eyebrow">A SMALL WORLD, BUILT WITH CURIOSITY</p><h1>Welcome to my corner of the internet.</h1></div>
          <p>Take a wander.<br />Or take the quick tour.</p>
        </div>
        <section className="world-frame" aria-label="Portfolio village prototype">
          <Game paused={portfolioRequest !== null} onPortfolioOpen={openSection} />
          <div className="world-footer" id="game-controls">
            <p><span className="status-dot" aria-hidden="true" /> Click the world to explore</p>
            <p>Move: <kbd>WASD</kbd> / <kbd>Arrow Keys</kbd><span className="control-divider">·</span>Interact: <kbd>E</kbd></p>
          </div>
        </section>
        <div className="page-note"><p>Original world. Work in progress.</p><p>Milestone 02 <span aria-hidden="true">/</span> Procedural placeholder art</p></div>
        <p className="mobile-note">Exploring works best with a keyboard. Quick Portfolio is available on every device.</p>
      </main>
      <footer className="site-footer"><span>Alirio Angel</span><span>Engineering with a playful side.</span></footer>
      <QuickPortfolio open={portfolioRequest !== null} initialSection={portfolioRequest?.section} onClose={() => setPortfolioRequest(null)} />
    </>
  );
}
