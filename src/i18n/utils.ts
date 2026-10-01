import type {
  Locale,
  TranslationKey,
  TranslationValue,
  TranslatorFunction,
} from "./types";
import { ui, defaultLang } from "./ui";

export const getLangFromUrl = (url: URL) => {
  const segments = url.pathname.split("/").filter(Boolean);
  const lang = segments.find((segment) => segment in ui);
  return (lang as keyof typeof ui) || defaultLang;
};

export const useTranslations = (lang: Locale): TranslatorFunction => {
  return <K extends TranslationKey>(key: K): TranslationValue<K> => {
    const value = (
      ui[lang] as Partial<Record<TranslationKey, TranslationValue<K>>>
    )[key];
    return value ?? ui[defaultLang][key];
  };
};

export const getSkillsCategoryMap = (lang: Locale): Record<string, string> => {
  const entries = Object.entries(ui[lang]).filter(([key]) =>
    key.startsWith("skills.categories.")
  ) as [string, string][];

  return Object.fromEntries(entries);
};

export const getContactFormTranslations = (
  lang: Locale
): Record<string, string> => {
  const entries = Object.entries(ui[lang]).filter(([key]) =>
    key.startsWith("contact.form.")
  ) as [string, string][];

  return Object.fromEntries(entries);
};
