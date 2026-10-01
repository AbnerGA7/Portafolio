import type { TranslationKey } from "@/i18n/types";

export interface Certification {
  title: TranslationKey;
  issuer: TranslationKey;
  date: TranslationKey;
  detail: TranslationKey;
  image: ImageMetadata;
  /** Documento horizontal: la vista previa se recorta al centro */
  landscape?: boolean;
  /** Documento completo (PDF) */
  documentUrl: string;
}
