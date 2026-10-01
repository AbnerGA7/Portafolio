import type { ContactMeItem } from "@/types/ContactMeItem";

import GithubIcon from "@/components/icons/GithubIcon.astro";
import LinkedinIcon from "@/components/icons/LinkedinIcon.astro";
import WhatsappIcon from "@/components/icons/WhatsappIcon.astro";
import EmailIcon from "@/components/icons/EmailIcon.astro";
import InstagramIcon from "@/components/icons/InstagramIcon.astro";
import FacebookIcon from "@/components/icons/FacebookIcon.astro";

export const contactMeData: ContactMeItem[] = [
  {
    title: "contact.whatsapp.title",
    description: "contact.whatsapp.description",
    url: "contact.whatsapp.url",
    Icon: WhatsappIcon,
  },
  {
    title: "contact.email.title",
    description: "contact.email.description",
    url: "contact.email.url",
    Icon: EmailIcon,
  },
  {
    title: "contact.linkedin.title",
    description: "contact.linkedin.description",
    url: "contact.linkedin.url",
    Icon: LinkedinIcon,
  },
  {
    title: "contact.github.title",
    description: "contact.github.description",
    url: "contact.github.url",
    Icon: GithubIcon,
  },
  {
    title: "contact.instagram.title",
    description: "contact.instagram.description",
    url: "contact.instagram.url",
    Icon: InstagramIcon,
  },
  {
    title: "contact.facebook.title",
    description: "contact.facebook.description",
    url: "contact.facebook.url",
    Icon: FacebookIcon,
  },
];
