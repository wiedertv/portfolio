"use client";

import { useEffect } from "react";
import { applyThemePreference, isTheme, THEME_QUERY, THEME_STORAGE_KEY } from "@/lib/theme";

export function ThemeSync() {
  useEffect(() => {
    const media = window.matchMedia(THEME_QUERY);
    const onSystemChange = () => {
      if (document.documentElement.dataset.themePreference === "system") applyThemePreference(null);
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        applyThemePreference(isTheme(event.newValue) ? event.newValue : null);
      }
    };
    onSystemChange();
    media.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return null;
}
