"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { SectionId } from "@/types/portfolio";
import { PortfolioContent } from "./PortfolioContent";

function focusSection(root: HTMLDialogElement, id: string) {
  const section = root.querySelector<HTMLElement>(`#${id}`);
  if (!section) return;
  section.scrollIntoView({ block: "start" });
  section.querySelector<HTMLElement>("[tabindex]")?.focus({ preventScroll: true });
}

export function QuickPortfolio({ open, initialSection, onClose }: { open: boolean; initialSection?: SectionId; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!open || !element) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    if (initialSection) focusSection(element, initialSection);
    else element.scrollTop = 0;
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
    };
  }, [open, initialSection]);

  return (
    <dialog ref={dialog} className="portfolio-dialog" aria-labelledby="portfolio-title" onCancel={onClose} onClick={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="portfolio-dialog-inner" onClick={(event) => {
        // Keep section navigation inside the dialog without changing the underlying page's URL.
        const target = event.target;
        const anchor = target instanceof Element ? target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
        if (!anchor) return;
        if (!dialog.current) return;
        event.preventDefault();
        focusSection(dialog.current, anchor.hash.slice(1));
      }}>
        <div className="portfolio-toolbar">
          <Link href={initialSection ? `/portfolio#${initialSection}` : "/portfolio"} className="portfolio-page-link">Open full page <span aria-hidden="true">↗</span></Link>
          <button type="button" className="close-button" onClick={onClose} autoFocus aria-label="Close quick portfolio">Back to village <span aria-hidden="true">✕</span></button>
        </div>
        <PortfolioContent inDialog />
      </div>
    </dialog>
  );
}
