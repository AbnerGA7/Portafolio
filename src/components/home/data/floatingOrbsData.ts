import type { FloatingOrbConfig } from "@/types/FloatingOrbConfig";
import ReactIcon from "@/components/icons/colored/ReactIcon.astro";
import NextIcon from "@/components/icons/colored/NextIcon.astro";
import FirebaseIcon from "@/components/icons/colored/FirebaseIcon.astro";
import JavaScriptIcon from "@/components/icons/colored/JavaScriptIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import NodeIcon from "@/components/icons/colored/NodeIcon.astro";
import KotlinIcon from "@/components/icons/colored/KotlinIcon.astro";
import AndroidIcon from "@/components/icons/colored/AndroidIcon.astro";
import PythonIcon from "@/components/icons/colored/PythonIcon.astro";
import GithubIcon from "@/components/icons/GithubIcon.astro";

export const floatingOrbsData: FloatingOrbConfig[] = [
  {
    Icon: ReactIcon,
    position: "top-0 left-0 xl:left-5 2xl:left-2",
    size: "size-6 md:size-8 2xl:size-10",
    tooltip: "React & React Native",
    url: "https://react.dev/",
  },
  {
    Icon: NextIcon,
    position: "hidden sm:block top-5 md:top-20 left-4 xs:left-8 md:left-12",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    Icon: JavaScriptIcon,
    position: "top-15 md:top-50 left-0 xs:left-4 xl:left-5 2xl:left-2",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "JavaScript",
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    Icon: FirebaseIcon,
    position: "bottom-20 left-0 xs:left-4 xl:left-5 2xl:left-2",
    size: "size-6 md:size-7 2xl:size-8",
    tooltip: "Firebase",
    url: "https://firebase.google.com/",
  },
  {
    Icon: TailwindCSSIcon,
    position: "bottom-0 left-0 xl:left-5 2xl:left-2",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    Icon: AndroidIcon,
    position: "hidden sm:block top-0 right-3 sm:right-0",
    size: "size-5 md:size-7 2xl:size-8",
    tooltip: "Android",
    url: "https://developer.android.com/",
  },
  {
    Icon: KotlinIcon,
    position: "top-0 xs:top-8 md:top-18 right-4 xs:right-8 md:right-3",
    size: "size-5 md:size-6 2xl:size-7",
    tooltip: "Kotlin",
    url: "https://kotlinlang.org/",
  },
  {
    Icon: NodeIcon,
    position:
      "hidden sm:block top-60 xs:top-50 right-0 xs:right-0 sm:right-0 md:right-0 xl:right-3 2xl:right-0",
    size: "size-5 md:size-6 2xl:size-7",
    tooltip: "Node.js",
    url: "https://nodejs.org/",
  },
  {
    Icon: GithubIcon,
    position:
      "bottom-10 md:bottom-20 right-3 xs:right-8 sm:right-15 md:right-8",
    size: "size-4 xs:size-6 md:size-7 2xl:size-8",
    tooltip: "GitHub",
    url: "https://github.com/AbnerGA7",
  },
  {
    Icon: PythonIcon,
    position: "bottom-0 right-3 sm:right-0",
    size: "size-4 md:size-5 2xl:size-6",
    tooltip: "Python",
    url: "https://www.python.org/",
  },
];
