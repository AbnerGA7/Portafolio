import GraduationIcon from "@/components/icons/GraduationIcon.astro";
import IdCardIcon from "@/components/icons/IdCardIcon.astro";
import LocationIcon from "@/components/icons/LocationIcon.astro";
import type { PersonalInfoItem } from "@/types/PersonalInfoItem";

export const personalInfoItems: PersonalInfoItem[] = [
  {
    label: "about.personal.name",
    content: "Abner Gonzales",
    icon: {
      Icon: IdCardIcon,
    },
  },
  {
    label: "about.personal.place",
    content: "Lima, Perú",
    icon: {
      Icon: LocationIcon,
    },
  },
  {
    label: "about.personal.education",
    content: "about.personal.education.value",
    translate: true,
    icon: {
      Icon: GraduationIcon,
    },
  },
];
