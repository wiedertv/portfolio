"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { PortfolioContent } from "./PortfolioContent";

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
      <div className="portfolio-dialog-inner" onClick={(event) => {
        // Keep section navigation inside the dialog without changing the underlying page's URL.
        const target = event.target;
        const anchor = target instanceof Element ? target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
        if (!anchor) return;
        const section = dialog.current?.querySelector<HTMLElement>(anchor.hash);
        if (!section) return;
        event.preventDefault();
        section.scrollIntoView({ block: "start" });
        section.querySelector<HTMLElement>("[tabindex]")?.focus({ preventScroll: true });
      }}>
        <div className="portfolio-toolbar">
          <Link href="/portfolio" className="portfolio-page-link">Open full page <span aria-hidden="true">↗</span></Link>
          <button type="button" className="close-button" onClick={onClose} autoFocus aria-label="Close quick portfolio">Back to village <span aria-hidden="true">✕</span></button>
        </div>
        <PortfolioContent inDialog />
      </div>
    </dialog>
  );
}
