import type { NearbyLocation } from "@/game/types/world";

export function InteractionHint({ location }: { location: NearbyLocation | null }) {
  return (
    <div className="interaction-hint" role="status" aria-live="polite" aria-atomic="true">
      {location && <span><kbd>E</kbd>{location.prompt}</span>}
    </div>
  );
}
