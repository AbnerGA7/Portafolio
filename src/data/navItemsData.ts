import type { NavItem } from "@/types/NavItem";
import CodeIcon from "@/components/icons/CodeIcon.astro";
import ContactIcon from "@/components/icons/ContactIcon.astro";
import HomeIcon from "@/components/icons/HomeIcon.astro";
import PersonIconOutline from "@/components/icons/PersonIconOutline.astro";
import SkillIcon from "@/components/icons/Skill_Icon.astro";
import StatisticsIcon from "@/components/icons/StatisticsIcon.astro";

export const navItemsData: NavItem[] = [
  {
    link: "#home",
    title: "nav.home",
    icon: { Icon: HomeIcon },
  },
  {
    link: "#skills",
    title: "nav.skills",
    icon: { Icon: SkillIcon },
  },
  {
    link: "#experience",
    title: "nav.experience",
    icon: { Icon: StatisticsIcon },
  },
  {
    link: "#projects",
    title: "nav.projects",
    icon: { Icon: CodeIcon },
  },
  {
    link: "#about",
    title: "nav.about",
    icon: { Icon: PersonIconOutline },
  },
  {
    link: "#contact",
    title: "nav.contact",
    icon: { Icon: ContactIcon },
  },
] as const;
