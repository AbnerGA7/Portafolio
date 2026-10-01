import { type TechGridItem } from "@/components/skills/components/TechGrid";
import { NodeIcon, SanityIcon } from "@/components/skills/icons/server-side";
import {
  AndroidIcon,
  AngularIcon,
  ExcelIcon,
  ExpoIcon,
  FlutterIcon,
  FramerMotionIcon,
  JetpackComposeIcon,
  MaterialDesignIcon,
  NextIcon,
  PdfIcon,
  ReactIcon,
  RechartsIcon,
  TailwindIcon,
  TensorFlowIcon,
  ViteIcon,
} from "@/components/skills/icons/client-side";
import {
  CssIcon,
  DartIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  KotlinIcon,
  PythonIcon,
  SQLLanguageIcon,
} from "@/components/skills/icons/languages";
import { FirestoreIcon, SqlServerIcon } from "@/components/skills/icons/databases";
import {
  FirebaseIcon,
  NetlifyIcon,
  SupabaseIcon,
  VercelIcon,
} from "@/components/skills/icons/cloud-devops";
import {
  AndroidStudioIcon,
  FigmaIcon,
  UnityIcon,
  GitHubIcon,
  GitIcon,
} from "@/components/skills/icons/tools-ides";

import type { TranslationKey } from "@/i18n/types";

export const techSkillsData: Partial<Record<TranslationKey, TechGridItem[]>> = {
  "skills.categories.client": [
    { Icon: ReactIcon, name: "React", tooltip: { color: "#087EA4" } },
    { Icon: NextIcon, name: "Next.js", tooltip: { color: "#000000" } },
    { Icon: AngularIcon, name: "Angular", tooltip: { color: "#DD0031" } },
    { Icon: TailwindIcon, name: "Tailwind CSS", tooltip: { color: "#06B6D4" } },
    { Icon: ViteIcon, name: "Vite", tooltip: { color: "#646CFF" } },
    { Icon: HtmlIcon, name: "HTML5", tooltip: { color: "#E34F26" } },
    { Icon: CssIcon, name: "CSS3", tooltip: { color: "#663399" } },
  ],

  "skills.categories.mobile": [
    { Icon: ReactIcon, name: "React Native", tooltip: { color: "#087EA4" } },
    { Icon: ExpoIcon, name: "Expo", tooltip: { color: "#1C2024" } },
    { Icon: AndroidIcon, name: "Android", tooltip: { color: "#3DDC84" } },
    { Icon: KotlinIcon, name: "Kotlin", tooltip: { color: "#7F52FF" } },
    { Icon: FlutterIcon, name: "Flutter", tooltip: { color: "#02569B" } },
    { Icon: JetpackComposeIcon, name: "Jetpack Compose", tooltip: { color: "#4285F4" } },
    { Icon: MaterialDesignIcon, name: "Material Design", tooltip: { color: "#6750A4" } },
  ],

  "skills.categories.languages": [
    { Icon: JavaScriptIcon, name: "JavaScript", tooltip: { color: "#C9B200" } },
    { Icon: PythonIcon, name: "Python", tooltip: { color: "#3776AB" } },
    { Icon: JavaIcon, name: "Java", tooltip: { color: "#007396" } },
    { Icon: KotlinIcon, name: "Kotlin", tooltip: { color: "#7F52FF" } },
    { Icon: DartIcon, name: "Dart", tooltip: { color: "#0175C2" } },
    { Icon: SQLLanguageIcon, name: "SQL", tooltip: { color: "#00758F" } },
  ],

  "skills.categories.backend": [
    { Icon: FirebaseIcon, name: "Firebase", tooltip: { color: "#DD2C00" } },
    { Icon: FirestoreIcon, name: "Firestore", tooltip: { color: "#F57C00" } },
    { Icon: SupabaseIcon, name: "Supabase", tooltip: { color: "#249361" } },
    { Icon: NodeIcon, name: "Node.js", tooltip: { color: "#339933" } },
    { Icon: SqlServerIcon, name: "SQL Server", tooltip: { color: "#A91D22" } },
    { Icon: SanityIcon, name: "Sanity CMS", tooltip: { color: "#F03E2F" } },
  ],

  "skills.categories.libraries": [
    { Icon: TensorFlowIcon, name: "TensorFlow Lite", tooltip: { color: "#E65100" } },
    { Icon: FramerMotionIcon, name: "Framer Motion", tooltip: { color: "#0055FF" } },
    { Icon: RechartsIcon, name: "Recharts", tooltip: { color: "#22B5BF" } },
    { Icon: PdfIcon, name: "jsPDF", tooltip: { color: "#E5252A" } },
    { Icon: ExcelIcon, name: "ExcelJS", tooltip: { color: "#217346" } },
  ],

  "skills.categories.tools": [
    { Icon: GitIcon, name: "Git", tooltip: { color: "#F05032" } },
    { Icon: GitHubIcon, name: "GitHub", tooltip: { color: "#181717" } },
    { Icon: NetlifyIcon, name: "Netlify", tooltip: { color: "#00A99D" } },
    { Icon: VercelIcon, name: "Vercel", tooltip: { color: "#000000" } },
    { Icon: FigmaIcon, name: "Figma", tooltip: { color: "#F24E1E" } },
    { Icon: UnityIcon, name: "Unity", tooltip: { color: "#222222" } },
    { Icon: AndroidStudioIcon, name: "Android Studio", tooltip: { color: "#3DDC84" } },
  ],
};
