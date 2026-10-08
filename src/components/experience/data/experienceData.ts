import type { Experience } from "@/types/Experience";
import CodeIcon from "@/components/icons/CodeIcon.astro";
import AndroidOutlineIcon from "@/components/icons/AndroidIcon.astro";
import GraduationIcon from "@/components/icons/GraduationIcon.astro";
import ContactIcon from "@/components/icons/ContactIcon.astro";
import LocationIcon from "@/components/icons/LocationIcon.astro";
import JavaScriptIcon from "@/components/icons/colored/JavaScriptIcon.astro";
import ReactIcon from "@/components/icons/colored/ReactIcon.astro";
import FirebaseIcon from "@/components/icons/colored/FirebaseIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import SanityIcon from "@/components/icons/colored/SanityIcon.astro";
import RechartsIcon from "@/components/icons/colored/RechartsIcon.astro";
import PdfIcon from "@/components/icons/colored/PdfIcon.astro";
import KotlinIcon from "@/components/icons/colored/KotlinIcon.astro";
import AndroidIcon from "@/components/icons/colored/AndroidIcon.astro";
import SqlServerIcon from "@/components/icons/colored/SqlServerIcon.astro";
import JavaIcon from "@/components/icons/colored/JavaIcon.astro";
import PythonIcon from "@/components/icons/colored/PythonIcon.astro";
import AngularIcon from "@/components/icons/colored/AngularIcon.astro";
import NodeIcon from "@/components/icons/colored/NodeIcon.astro";
import HtmlIcon from "@/components/icons/colored/HtmlIcon.astro";

export const experienceData: Experience[] = [
  {
    title: "experience.gm.title",
    company: "experience.gm.company",
    description: "experience.gm.description",
    Icon: ContactIcon,
    date: "experience.gm.date",
    documentUrl: "/documents/constancia-trabajo-gm-fabian.pdf",
    stack: [
      { title: "SQL Server", Icon: SqlServerIcon },
      { title: "JavaScript", Icon: JavaScriptIcon },
      { title: "HTML / CSS", Icon: HtmlIcon },
      { title: "Hardware & Software", Icon: ContactIcon },
    ],
  },
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
    title: "experience.rescuemal.title",
    company: "experience.rescuemal.company",
    description: "experience.rescuemal.description",
    Icon: AndroidOutlineIcon,
    date: "experience.rescuemal.date",
    stack: [
      { title: "Kotlin", Icon: KotlinIcon },
      { title: "Java", Icon: JavaIcon },
      { title: "Android", Icon: AndroidIcon },
      { title: "Firebase", Icon: FirebaseIcon },
      { title: "Google Maps Platform", Icon: LocationIcon },
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
