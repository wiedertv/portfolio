import assert from "node:assert/strict";
import test from "node:test";
import { WORLD_LOCATIONS } from "../src/game/constants/worldLocations.ts";
import { findNearbyLocation } from "../src/game/systems/findNearbyLocation.ts";
import { createGameEvents } from "../src/game/events/gameEvents.ts";

const expectedSections = ["about", "projects", "experience", "skills", "game-lab", "contact", "achievements"];

test("every location is reachable and maps to a distinct portfolio section", () => {
  assert.deepEqual(WORLD_LOCATIONS.map(location => location.section), expectedSections);
  assert.equal(new Set(WORLD_LOCATIONS.map(location => location.id)).size, 7);
  for (const location of WORLD_LOCATIONS) {
    assert.equal(findNearbyLocation(location.interactionArea, WORLD_LOCATIONS)?.id, location.id);
  }
});

test("proximity includes the circle boundary and clears outside it", () => {
  const location = WORLD_LOCATIONS[0];
  const { x, y, radius } = location.interactionArea;
  assert.equal(findNearbyLocation({ x: x + radius, y }, [location]), location);
  assert.equal(findNearbyLocation({ x: x + radius + 0.01, y }, [location]), null);
  assert.equal(findNearbyLocation({ x: 0, y: 0 }, WORLD_LOCATIONS), null);
});

test("overlapping zones produce only the closest result, with stable ties", () => {
  const first = { ...WORLD_LOCATIONS[0], interactionArea: { x: 0, y: 0, radius: 100 } };
  const second = { ...WORLD_LOCATIONS[1], interactionArea: { x: 20, y: 0, radius: 100 } };
  assert.equal(findNearbyLocation({ x: 19, y: 0 }, [first, second]), second);
  assert.equal(findNearbyLocation({ x: 10, y: 0 }, [first, second]), first);
});

test("event bridge isolates mounted games and removes unsubscribed listeners", () => {
  const first = createGameEvents();
  const second = createGameEvents();
  const requests = [];
  const unsubscribe = first.on("portfolio:open", request => requests.push(request));
  second.emit("portfolio:open", { section: "projects" });
  first.emit("portfolio:open", { section: "experience" });
  unsubscribe();
  first.emit("portfolio:open", { section: "about" });
  assert.deepEqual(requests, [{ section: "experience" }]);
});

test("proximity bridge reports entry and exit and cleans up", () => {
  const bridge = createGameEvents();
  const nearby = [];
  const unsubscribe = bridge.on("location:nearby", location => nearby.push(location?.id ?? null));
  bridge.emit("location:nearby", WORLD_LOCATIONS[6]);
  bridge.emit("location:nearby", null);
  unsubscribe();
  bridge.emit("location:nearby", WORLD_LOCATIONS[0]);
  assert.deepEqual(nearby, ["quest-board", null]);
});
