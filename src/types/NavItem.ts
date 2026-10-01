import type { TranslationKey } from "@/i18n/types";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface NavItem {
  link: string;
  title: TranslationKey;
  icon: {
    Icon: AstroComponentFactory;
    className?: string;
  };
}
