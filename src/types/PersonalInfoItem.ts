import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { TranslationKey } from "@/i18n/types";

export interface PersonalInfoItem {
  label: TranslationKey;
  content: string;
  /** Si es true, `content` es una clave de traducción */
  translate?: boolean;
  icon: {
    Icon: AstroComponentFactory;
  };
}
