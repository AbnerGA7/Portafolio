import type { Locale, TranslationKey } from "@/i18n/types";

/** Cada página del sitio con su ruta en cada idioma */
export const routes = {
  home: { es: "/", en: "/en/" },
  skills: { es: "/habilidades/", en: "/en/skills/" },
  experience: { es: "/experiencia/", en: "/en/experience/" },
  projects: { es: "/proyectos/", en: "/en/projects/" },
  certifications: { es: "/certificaciones/", en: "/en/certifications/" },
  about: { es: "/sobre-mi/", en: "/en/about/" },
  contact: { es: "/contacto/", en: "/en/contact/" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

export interface NavLink {
  key: RouteKey;
  label: TranslationKey;
}

/** Orden del menú; también define la página "siguiente" al final de cada una */
export const navLinks: NavLink[] = [
  { key: "home", label: "nav.home" },
  { key: "projects", label: "nav.projects" },
  { key: "experience", label: "nav.experience" },
  { key: "skills", label: "nav.skills" },
  { key: "certifications", label: "nav.certifications" },
  { key: "about", label: "nav.about" },
  { key: "contact", label: "nav.contact" },
];

export const getRoute = (key: RouteKey, lang: Locale) => routes[key][lang];

export const getProjectRoute = (id: string, lang: Locale) =>
  `${routes.projects[lang]}${id}/`;

export const getNextLink = (key: RouteKey) => {
  const index = navLinks.findIndex((link) => link.key === key);
  return navLinks[(index + 1) % navLinks.length];
};

const normalize = (path: string) => (path.endsWith("/") ? path : `${path}/`);

/** Devuelve la página activa a partir de la URL (las fichas de proyecto cuentan como "projects") */
export const getRouteKeyFromPath = (pathname: string): RouteKey | undefined => {
  const path = normalize(pathname);
  const entries = Object.entries(routes) as [RouteKey, Record<Locale, string>][];

  const exact = entries.find(([, paths]) =>
    Object.values(paths).includes(path)
  );
  if (exact) return exact[0];

  return entries.find(
    ([key, paths]) =>
      key !== "home" && Object.values(paths).some((p) => path.startsWith(p))
  )?.[0];
};

/** Traduce la URL actual al otro idioma, conservando la página (y el proyecto) */
export const getAlternatePath = (pathname: string, target: Locale): string => {
  const path = normalize(pathname);
  const key = getRouteKeyFromPath(path);
  if (!key) return routes.home[target];

  const current = Object.values(routes[key]).find((p) => path.startsWith(p));
  const rest = current ? path.slice(current.length) : "";
  return `${routes[key][target]}${rest}`;
};
