import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { TranslationKey } from "@/i18n/types";

export interface WhoIAmItem {
  title: TranslationKey;
  description: TranslationKey;
  icon: {
    Icon: AstroComponentFactory;
    size: string;
  };
}
