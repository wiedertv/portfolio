import type { SectionId } from "@/types/portfolio";

export type NearbyLocation = Readonly<{
  id: string;
  label: string;
  section: SectionId;
  prompt: string;
}>;

export type WorldLocation = NearbyLocation & Readonly<{
  kind: "building" | "board";
  x: number;
  y: number;
  color: number;
  interactionArea: Readonly<{ x: number; y: number; radius: number }>;
}>;
