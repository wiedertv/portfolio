import assert from "node:assert/strict";
import test from "node:test";
import { runInNewContext } from "node:vm";
import { themeBootstrap, THEME_QUERY, THEME_STORAGE_KEY } from "../src/lib/theme.ts";

function bootstrap({ stored = null, systemDark = false, storageBlocked = false } = {}) {
  const root = { dataset: {} };
  runInNewContext(themeBootstrap, {
    document: { documentElement: root },
    localStorage: { getItem(key) {
      assert.equal(key, THEME_STORAGE_KEY);
      if (storageBlocked) throw new Error("Storage unavailable");
      return stored;
    } },
    matchMedia(query) {
      assert.equal(query, THEME_QUERY);
      return { matches: systemDark };
    },
  });
  return root.dataset;
}

test("initial theme follows the system before React mounts", () => {
  assert.deepEqual(bootstrap({ systemDark: true }), { theme: "dark", themePreference: "system" });
  assert.deepEqual(bootstrap(), { theme: "light", themePreference: "system" });
});

test("saved preference overrides the system on the first paint", () => {
  assert.deepEqual(bootstrap({ stored: "light", systemDark: true }), { theme: "light", themePreference: "light" });
  assert.deepEqual(bootstrap({ stored: "dark" }), { theme: "dark", themePreference: "dark" });
});

test("invalid or unavailable storage falls back to the system", () => {
  assert.equal(bootstrap({ stored: "invalid", systemDark: true }).theme, "dark");
  assert.equal(bootstrap({ storageBlocked: true, systemDark: true }).theme, "dark");
});
