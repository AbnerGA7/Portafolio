import minkaImage from "@/assets/projects/minka.webp";
import minkaAdmin from "@/assets/projects/minka/admin-empresas.webp";
import minkaFicha from "@/assets/projects/minka/admin-ficha.webp";
import minkaInicio from "@/assets/projects/minka/empresa-inicio.webp";
import minkaGeneral from "@/assets/projects/minka/config-general.webp";
import minkaRoles from "@/assets/projects/minka/config-roles.webp";
import minkaSoporte from "@/assets/projects/minka/soporte-solo-lectura.webp";
import minkaAuditoria from "@/assets/projects/minka/auditoria.webp";
import NextIcon from "@/components/icons/colored/NextIcon.astro";
import VercelIcon from "@/components/icons/colored/VercelIcon.astro";
import lasTorresImage from "@/assets/projects/las_torres.webp";
import mnistImage from "@/assets/projects/mnist_android.webp";
import utilscanImage from "@/assets/projects/utilscan.webp";
import vitalisImage from "@/assets/projects/vitalis.webp";
import rescuemalImage from "@/assets/projects/rescuemal.webp";
import memoriaImage from "@/assets/projects/memoria_viva.webp";
import smartMarketImage from "@/assets/projects/smart_market.webp";
import adminCactusImage from "@/assets/projects/admin_cactus.webp";
import expresateImage from "@/assets/projects/expresate.webp";
import gcorpStoreImage from "@/assets/projects/gcorp_store.webp";
import FlutterIcon from "@/components/icons/colored/FlutterIcon.astro";
import DartIcon from "@/components/icons/colored/DartIcon.astro";
import GeminiIcon from "@/components/icons/colored/GeminiIcon.astro";
import SupabaseIcon from "@/components/icons/colored/SupabaseIcon.astro";
import MediaPipeIcon from "@/components/icons/colored/MediaPipeIcon.astro";
import GoogleMapsIcon from "@/components/icons/colored/GoogleMapsIcon.astro";
import UnityIcon from "@/components/icons/colored/UnityIcon.astro";
import CSharpIcon from "@/components/icons/colored/CSharpIcon.astro";
import JavaIcon from "@/components/icons/colored/JavaIcon.astro";
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
    id: "minka",
    title: "projects.minka.title",
    tagline: "projects.minka.tagline",
    description: "projects.minka.description",
    category: "web",
    status: "development",
    color: "#0a68eb",
    emoji: "🧩",
    image: minkaImage,
    demoUrl: "https://demo.minka.abnergonzales.dev",
    demoLabel: "projects.button.demo",
    gallery: [
      { image: minkaAdmin, caption: "projects.minka.gallery.admin" },
      { image: minkaFicha, caption: "projects.minka.gallery.ficha" },
      { image: minkaInicio, caption: "projects.minka.gallery.inicio" },
      { image: minkaGeneral, caption: "projects.minka.gallery.general" },
      { image: minkaRoles, caption: "projects.minka.gallery.roles" },
      { image: minkaSoporte, caption: "projects.minka.gallery.soporte" },
      { image: minkaAuditoria, caption: "projects.minka.gallery.auditoria" },
    ],
    stack: [
      { title: "Next.js", Icon: NextIcon },
      { title: "React", Icon: ReactIcon },
      { title: "Supabase (PostgreSQL + RLS)", Icon: SupabaseIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Vercel", Icon: VercelIcon },
    ],
  },
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
    id: "vitalis",
    title: "projects.vitalis.title",
    tagline: "projects.vitalis.tagline",
    description: "projects.vitalis.description",
    category: "mobile",
    status: "completed",
    color: "#a78bfa",
    emoji: "💪",
    image: vitalisImage,
    codeUrl: "https://github.com/AbnerGA7/vitalis",
    stack: [
      { title: "Flutter", Icon: FlutterIcon },
      { title: "Dart", Icon: DartIcon },
      { title: "Gemma (IA local)", Icon: GeminiIcon },
    ],
  },
  {
    id: "utilscan",
    title: "projects.utilscan.title",
    tagline: "projects.utilscan.tagline",
    description: "projects.utilscan.description",
    category: "mobile",
    status: "completed",
    color: "#4ade80",
    emoji: "📐",
    image: utilscanImage,
    demoUrl: "https://github.com/AbnerGA7/utilscan/releases/latest/download/utilscan.apk",
    demoLabel: "projects.button.apk",
    codeUrl: "https://github.com/AbnerGA7/utilscan",
    stack: [
      { title: "Kotlin", Icon: KotlinIcon },
      { title: "Jetpack Compose", Icon: JetpackComposeIcon },
      { title: "YOLO11 + LiteRT", Icon: TensorFlowIcon },
      { title: "Python", Icon: PythonIcon },
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
    id: "memoria-viva",
    title: "projects.memoria.title",
    tagline: "projects.memoria.tagline",
    description: "projects.memoria.description",
    category: "mobile",
    status: "development",
    color: "#f59e0b",
    emoji: "📸",
    image: memoriaImage,
    stack: [
      { title: "Kotlin", Icon: KotlinIcon },
      { title: "Jetpack Compose", Icon: JetpackComposeIcon },
      { title: "Supabase", Icon: SupabaseIcon },
      { title: "MediaPipe LLM", Icon: MediaPipeIcon },
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
    image: smartMarketImage,
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
    image: gcorpStoreImage,
    demoUrl: "https://gcorpstore.abnergonzales.dev",
    codeUrl: "https://github.com/AbnerGA7/GCorpStoreFull-stack",
    stack: [
      { title: "React", Icon: ReactIcon },
      { title: "Sanity CMS", Icon: SanityIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Framer Motion", Icon: FramerMotionIcon },
    ],
  },
  {
    id: "rescuemal",
    title: "projects.rescuemal.title",
    tagline: "projects.rescuemal.tagline",
    description: "projects.rescuemal.description",
    category: "mobile",
    status: "completed",
    color: "#f97316",
    emoji: "🐾",
    image: rescuemalImage,
    stack: [
      { title: "Kotlin", Icon: KotlinIcon },
      { title: "Java", Icon: JavaIcon },
      { title: "Firebase", Icon: FirebaseIcon },
      { title: "Google Maps", Icon: GoogleMapsIcon },
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
    image: adminCactusImage,
    stack: [
      { title: "React", Icon: ReactIcon },
      { title: "Firebase", Icon: FirebaseIcon },
      { title: "Tailwind CSS", Icon: TailwindCSSIcon },
      { title: "Recharts", Icon: RechartsIcon },
      { title: "PDF / Excel", Icon: PdfIcon },
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
    id: "la-nota-final",
    title: "projects.notafinal.title",
    tagline: "projects.notafinal.tagline",
    description: "projects.notafinal.description",
    category: "game",
    status: "completed",
    color: "#22c55e",
    emoji: "🎮",
    stack: [
      { title: "Unity 3D", Icon: UnityIcon },
      { title: "C#", Icon: CSharpIcon },
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
    image: expresateImage,
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
  "game",
];
