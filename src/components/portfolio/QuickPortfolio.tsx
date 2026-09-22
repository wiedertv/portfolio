"use client";

import { useEffect, useRef } from "react";
import { portfolioSections } from "@/data/portfolio";

export function QuickPortfolio({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!open || !element) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [open]);

  return (
    <dialog ref={dialog} className="portfolio-dialog" aria-labelledby="portfolio-title" onCancel={onClose} onClick={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="portfolio-content">
        <div className="flex items-start justify-between gap-6">
          <div><p className="eyebrow">THE QUICK TOUR</p><h2 id="portfolio-title">A little about Alirio.</h2></div>
          <button type="button" className="close-button" onClick={onClose} autoFocus aria-label="Close quick portfolio">✕</button>
        </div>
        <p className="panel-intro">Fullstack Engineer. This first prototype is the foundation; the full portfolio is on its way.</p>
        <nav aria-label="Portfolio sections" className="section-links">
          {portfolioSections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
        </nav>
        <div className="portfolio-sections">
          {portfolioSections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <span className="section-number" aria-hidden="true">0{index + 1}</span>
              <div><h3>{section.title}</h3><p>{section.description}</p></div>
            </section>
          ))}
        </div>
      </div>
    </dialog>
  );
}
