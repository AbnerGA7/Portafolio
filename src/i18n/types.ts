import { defaultLang, ui } from "@/i18n/ui";

export type TranslationMap = typeof ui;

export type Locale = keyof TranslationMap;

export type DefaultLocale = typeof defaultLang;

export type TranslationKey = keyof TranslationMap[DefaultLocale];

export type TranslationValue<K extends TranslationKey> =
  TranslationMap[DefaultLocale][K];

export type TranslatorFunction = <K extends TranslationKey>(
  key: K
) => TranslationValue<K>;
