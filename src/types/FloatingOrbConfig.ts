import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface FloatingOrbConfig {
  Icon: AstroComponentFactory;
  position: string;
  size?: string;
  tooltip: string;
  url: string;
}
