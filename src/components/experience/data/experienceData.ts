import type { Experience } from "@/types/Experience";
import CodeIcon from "@/components/icons/CodeIcon.astro";
import AndroidOutlineIcon from "@/components/icons/AndroidIcon.astro";
import GraduationIcon from "@/components/icons/GraduationIcon.astro";
import ReactIcon from "@/components/icons/colored/ReactIcon.astro";
import FirebaseIcon from "@/components/icons/colored/FirebaseIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import SanityIcon from "@/components/icons/colored/SanityIcon.astro";
import RechartsIcon from "@/components/icons/colored/RechartsIcon.astro";
import PdfIcon from "@/components/icons/colored/PdfIcon.astro";
import KotlinIcon from "@/components/icons/colored/KotlinIcon.astro";
import AndroidIcon from "@/components/icons/colored/AndroidIcon.astro";
import JetpackComposeIcon from "@/components/icons/colored/JetpackComposeIcon.astro";
import MaterialDesignIcon from "@/components/icons/colored/MaterialDesignIcon.astro";
import SqlServerIcon from "@/components/icons/colored/SqlServerIcon.astro";
import JavaIcon from "@/components/icons/colored/JavaIcon.astro";
import PythonIcon from "@/components/icons/colored/PythonIcon.astro";
import AngularIcon from "@/components/icons/colored/AngularIcon.astro";
import NodeIcon from "@/components/icons/colored/NodeIcon.astro";
import HtmlIcon from "@/components/icons/colored/HtmlIcon.astro";

export const experienceData: Experience[] = [
  {
    title: "experience.freelance.title",
    company: "experience.freelance.company",
    description: "experience.freelance.description",
    Icon: CodeIcon,
    date: "experience.freelance.date",
    stack: [
      { title: "React", Icon: ReactIcon },
      { title: "Firebase / Firestore", Icon: FirebaseIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Sanity CMS", Icon: SanityIcon },
      { title: "Recharts", Icon: RechartsIcon },
      { title: "jsPDF / ExcelJS", Icon: PdfIcon },
    ],
  },
  {
    title: "experience.android.title",
    company: "experience.android.company",
    description: "experience.android.description",
    Icon: AndroidOutlineIcon,
    date: "experience.android.date",
    stack: [
      { title: "Kotlin", Icon: KotlinIcon },
      { title: "Android", Icon: AndroidIcon },
      { title: "Jetpack", Icon: JetpackComposeIcon },
      { title: "Firebase", Icon: FirebaseIcon },
      { title: "Material Design", Icon: MaterialDesignIcon },
    ],
  },
  {
    title: "experience.education.title",
    company: "experience.education.company",
    description: "experience.education.description",
    Icon: GraduationIcon,
    date: "experience.education.date",
    stack: [
      { title: "SQL Server", Icon: SqlServerIcon },
      { title: "Java", Icon: JavaIcon },
      { title: "Python", Icon: PythonIcon },
      { title: "Angular", Icon: AngularIcon },
      { title: "Node.js", Icon: NodeIcon },
      { title: "HTML / CSS / JS", Icon: HtmlIcon },
    ],
  },
];
