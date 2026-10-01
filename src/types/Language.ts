import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Language {
  readonly title: string;
  readonly code: string;
  readonly Icon: AstroComponentFactory;
}
