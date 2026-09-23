"use client";

import { useSyncExternalStore } from "react";
import { selectTheme, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot() { return null; }

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <div className="theme-toggle" role="group" aria-label="Color theme">
      <button type="button" data-theme-option="light" aria-pressed={theme === "light"} onClick={() => selectTheme("light")}><span aria-hidden="true">☀</span> Light</button>
      <button type="button" data-theme-option="dark" aria-pressed={theme === "dark"} onClick={() => selectTheme("dark")}><span aria-hidden="true">☾</span> Dark</button>
    </div>
  );
}
