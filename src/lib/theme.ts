export type Theme = "light" | "dark";
export const THEME_STORAGE_KEY = "alirio-theme";
export const THEME_QUERY = "(prefers-color-scheme: dark)";

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

// Runs in <head> before the page is painted, independently of React hydration.
export const themeBootstrap = `(() => {
  let preference = null;
  try {
    const stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (stored === "light" || stored === "dark") preference = stored;
  } catch {}
  const root = document.documentElement;
  root.dataset.themePreference = preference || "system";
  root.dataset.theme = preference || (matchMedia(${JSON.stringify(THEME_QUERY)}).matches ? "dark" : "light");
})();`;

export function applyThemePreference(preference: Theme | null) {
  const root = document.documentElement;
  root.dataset.themePreference = preference ?? "system";
  root.dataset.theme = preference ?? (window.matchMedia(THEME_QUERY).matches ? "dark" : "light");
}

export function selectTheme(theme: Theme) {
  applyThemePreference(theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Private browsing or blocked storage should not prevent changing this page's theme.
  }
}
