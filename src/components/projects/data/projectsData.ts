import lasTorresImage from "@/assets/projects/las_torres.webp";
import mnistImage from "@/assets/projects/mnist_android.webp";
import TensorFlowIcon from "@/components/icons/colored/TensorFlowIcon.astro";
import PythonIcon from "@/components/icons/colored/PythonIcon.astro";
import type { Project, ProjectCategory } from "@/types/Project";
import ReactIcon from "@/components/icons/colored/ReactIcon.astro";
import FirebaseIcon from "@/components/icons/colored/FirebaseIcon.astro";
import TailwindCSSIcon from "@/components/icons/colored/TailwindCSSIcon.astro";
import RechartsIcon from "@/components/icons/colored/RechartsIcon.astro";
import PdfIcon from "@/components/icons/colored/PdfIcon.astro";
import HtmlIcon from "@/components/icons/colored/HtmlIcon.astro";
import CssIcon from "@/components/icons/colored/CssIcon.astro";
import JavaScriptIcon from "@/components/icons/colored/JavaScriptIcon.astro";
import KotlinIcon from "@/components/icons/colored/KotlinIcon.astro";
import AndroidIcon from "@/components/icons/colored/AndroidIcon.astro";
import JetpackComposeIcon from "@/components/icons/colored/JetpackComposeIcon.astro";
import MaterialDesignIcon from "@/components/icons/colored/MaterialDesignIcon.astro";
import SanityIcon from "@/components/icons/colored/SanityIcon.astro";
import FramerMotionIcon from "@/components/icons/colored/FramerMotionIcon.astro";

export const projectsData: Project[] = [
  {
    id: "las-torres-lotes",
    title: "projects.las_torres.title",
    tagline: "projects.las_torres.tagline",
    description: "projects.las_torres.description",
    category: "web",
    status: "production",
    color: "#3b82f6",
    emoji: "🏗️",
    image: lasTorresImage,
    demoUrl: "https://lastorres.abnergonzales.dev",
    stack: [
      { title: "React", Icon: ReactIcon },
      { title: "Firebase", Icon: FirebaseIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Recharts", Icon: RechartsIcon },
      { title: "jsPDF", Icon: PdfIcon },
    ],
  },
  {
    id: "mnist-android",
    title: "projects.mnist.title",
    tagline: "projects.mnist.tagline",
    description: "projects.mnist.description",
    category: "mobile",
    status: "completed",
    color: "#ff8f3f",
    emoji: "✍️",
    image: mnistImage,
    demoUrl:
      "https://github.com/AbnerGA7/caso1-mnist-android/releases/latest/download/caso1.apk",
    demoLabel: "projects.button.apk",
    codeUrl: "https://github.com/AbnerGA7/caso1-mnist-android",
    stack: [
      { title: "Kotlin", Icon: KotlinIcon },
      { title: "Android", Icon: AndroidIcon },
      { title: "TensorFlow Lite", Icon: TensorFlowIcon },
      { title: "Python", Icon: PythonIcon },
    ],
  },
  {
    id: "smart-market-pro",
    title: "projects.smart_market.title",
    tagline: "projects.smart_market.tagline",
    description: "projects.smart_market.description",
    category: "web",
    status: "production",
    color: "#10b981",
    emoji: "🛒",
    stack: [
      { title: "HTML", Icon: HtmlIcon },
      { title: "CSS", Icon: CssIcon },
      { title: "JavaScript", Icon: JavaScriptIcon },
      { title: "Firebase", Icon: FirebaseIcon },
    ],
  },
  {
    id: "gcorp-store",
    title: "projects.gcorp_store.title",
    tagline: "projects.gcorp_store.tagline",
    description: "projects.gcorp_store.description",
    category: "ecommerce",
    status: "production",
    color: "#22d3ee",
    emoji: "🛍️",
    demoUrl: "https://gcorpstore.abnergonzales.dev",
    codeUrl: "https://github.com/AbnerGA7/freestore-fullstack",
    stack: [
      { title: "React", Icon: ReactIcon },
      { title: "Sanity CMS", Icon: SanityIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Framer Motion", Icon: FramerMotionIcon },
    ],
  },
  {
    id: "admin-cactus",
    title: "projects.admin_cactus.title",
    tagline: "projects.admin_cactus.tagline",
    description: "projects.admin_cactus.description",
    category: "web",
    status: "completed",
    color: "#8b5cf6",
    emoji: "📊",
    stack: [
      { title: "React", Icon: ReactIcon },
      { title: "Firebase", Icon: FirebaseIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Recharts", Icon: RechartsIcon },
      { title: "jsPDF", Icon: PdfIcon },
    ],
  },
  {
    id: "bella-market-mobile",
    title: "projects.bella_market.title",
    tagline: "projects.bella_market.tagline",
    description: "projects.bella_market.description",
    category: "mobile",
    status: "development",
    color: "#f59e0b",
    emoji: "📱",
    stack: [
      { title: "Android", Icon: AndroidIcon },
      { title: "Kotlin", Icon: KotlinIcon },
      { title: "Jetpack", Icon: JetpackComposeIcon },
      { title: "Firebase", Icon: FirebaseIcon },
      { title: "Material Design", Icon: MaterialDesignIcon },
    ],
  },
  {
    id: "expresate",
    title: "projects.expresate.title",
    tagline: "projects.expresate.tagline",
    description: "projects.expresate.description",
    category: "landing",
    status: "completed",
    color: "#f43f5e",
    emoji: "🎨",
    demoUrl: "https://expresate.abnergonzales.dev",
    stack: [
      { title: "HTML", Icon: HtmlIcon },
      { title: "CSS", Icon: CssIcon },
      { title: "JavaScript", Icon: JavaScriptIcon },
    ],
  },
];

/** Categorías presentes, en el orden en que se muestran los filtros */
export const projectCategories: ProjectCategory[] = [
  "web",
  "mobile",
  "ecommerce",
  "landing",
];
