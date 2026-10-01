import LightBulbIcon from "@/components/icons/LightBulbIcon.astro";
import PersonIcon from "@/components/icons/PersonIcon.astro";
import type { WhoIAmItem } from "@/types/WhoIAmItem";

export const whoIAmItems: WhoIAmItem[] = [
  {
    title: "about.who.title-1",
    icon: {
      Icon: PersonIcon,
      size: "size-4 xl:size-5",
    },
    description: "about.who.description-1",
  },
  {
    title: "about.who.title-2",
    icon: {
      Icon: LightBulbIcon,
      size: "size-5 xl:size-6",
    },
    description: "about.who.description-2",
  },
];
