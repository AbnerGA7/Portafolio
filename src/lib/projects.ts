import { projectsData } from "@/components/projects/data/projectsData";
import type { TranslationKey } from "@/i18n/types";
import type { Project, ProjectCategory, ProjectStatus } from "@/types/Project";

/** Proyectos que aparecen en la portada */
const featuredIds = ["minka", "las-torres-lotes", "gcorp-store"];

export const featuredProjects = featuredIds
  .map((id) => projectsData.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));

export const categoryKey = (category: ProjectCategory) =>
  `projects.category.${category}` as TranslationKey;

export const statusKey = (status: ProjectStatus) =>
  `projects.status.${status}` as TranslationKey;

export const statusStyles: Record<ProjectStatus, string> = {
  production: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400",
  completed: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
  development: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
};

/** Proyecto anterior y siguiente para navegar entre fichas */
export const getSiblings = (id: string) => {
  const index = projectsData.findIndex((project) => project.id === id);
  const total = projectsData.length;
  return {
    prev: projectsData[(index - 1 + total) % total],
    next: projectsData[(index + 1) % total],
  };
};
