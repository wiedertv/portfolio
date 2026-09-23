import type { WorldLocation } from "@/game/types/world";

export function findNearbyLocation(position: { x: number; y: number }, locations: readonly WorldLocation[]): WorldLocation | null {
  let nearest: WorldLocation | null = null;
  let shortestDistance = Infinity;
  for (const location of locations) {
    const area = location.interactionArea;
    const distance = (position.x - area.x) ** 2 + (position.y - area.y) ** 2;
    if (distance <= area.radius ** 2 && distance < shortestDistance) {
      nearest = location;
      shortestDistance = distance;
    }
  }
  return nearest;
}
