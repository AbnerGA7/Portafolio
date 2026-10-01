import type { TranslationKey } from "@/i18n/types";

export interface Certification {
  title: TranslationKey;
  issuer: TranslationKey;
  date: TranslationKey;
  detail: TranslationKey;
  image: ImageMetadata;
  /** Documento completo (PDF) */
  documentUrl: string;
  /** Página oficial de verificación */
  verifyUrl?: string;
  verifyCode?: string;
}
