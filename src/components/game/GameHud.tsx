"use client";

import Link from "next/link";
import { useState } from "react";
import { Game } from "@/components/game/Game";
import { QuickPortfolio } from "@/components/portfolio/QuickPortfolio";

export function GameHud() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <Link href="/" className="identity" aria-label="Alirio Angel homepage">
          <span className="identity-mark" aria-hidden="true">a.</span>
          <span><span className="identity-name">Alirio Angel</span><span className="identity-role">Fullstack Engineer</span></span>
        </Link>
        <button type="button" className="portfolio-button" onClick={() => setPortfolioOpen(true)} aria-haspopup="dialog">Quick Portfolio <span aria-hidden="true">↗</span></button>
      </header>
      <main id="main-content">
        <div className="intro">
          <div><p className="eyebrow">A SMALL WORLD, BUILT WITH CURIOSITY</p><h1>Welcome to my corner of the internet.</h1></div>
          <p>Take a wander.<br />Or take the quick tour.</p>
        </div>
        <section className="world-frame" aria-label="Portfolio village prototype">
          <Game paused={portfolioOpen} />
          <div className="world-footer" id="game-controls">
            <p><span className="status-dot" aria-hidden="true" /> Click the world to explore</p>
            <p>Move: <kbd>WASD</kbd> / <kbd>Arrow Keys</kbd><span className="control-divider">·</span>Interact: <kbd>E</kbd> <span className="coming-soon">(coming soon)</span></p>
          </div>
        </section>
        <div className="page-note"><p>Original world. Work in progress.</p><p>Milestone 01 <span aria-hidden="true">/</span> Procedural placeholder art</p></div>
        <p className="mobile-note">Exploring works best with a keyboard. Quick Portfolio is available on every device.</p>
      </main>
      <footer className="site-footer"><span>Alirio Angel</span><span>Engineering with a playful side.</span></footer>
      <QuickPortfolio open={portfolioOpen} onClose={() => setPortfolioOpen(false)} />
    </>
  );
}
