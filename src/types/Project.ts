import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { TranslationKey } from "@/i18n/types";

interface TechStack {
  title: string;
  Icon: AstroComponentFactory;
}

export type ProjectCategory = "web" | "mobile" | "ecommerce" | "landing" | "game";

export type ProjectStatus = "production" | "completed" | "development";

export interface Project {
  id: string;
  title: TranslationKey;
  tagline: TranslationKey;
  description: TranslationKey;
  stack: TechStack[];
  category: ProjectCategory;
  status: ProjectStatus;
  /** Color de acento del proyecto (hex) usado en la portada y el subtítulo */
  color: string;
  /** Emoji de la portada cuando no hay captura de pantalla */
  emoji: string;
  image?: ImageMetadata;
  demoUrl?: string;
  /** Texto del botón principal (por defecto "Ver demo") */
  demoLabel?: TranslationKey;
  codeUrl?: string;
}
