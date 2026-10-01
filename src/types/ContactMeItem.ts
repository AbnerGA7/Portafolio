import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { TranslationKey } from "@/i18n/types";

export interface ContactMeItem {
  title: TranslationKey;
  description: TranslationKey;
  url: TranslationKey;
  Icon: AstroComponentFactory;
}
