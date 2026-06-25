const skillGroups = [
  {
    category: 'Frontend',
    icon: '🖥️',
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
    items: [
      { name: 'React', level: 90 },
      { name: 'React Native', level: 75 },
      { name: 'Next.js', level: 80 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend & BD',
    icon: '⚙️',
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/20',
    items: [
      { name: 'Firebase / Firestore', level: 88 },
      { name: 'Sanity CMS', level: 75 },
      { name: 'SQL Server', level: 70 },
      { name: 'Python', level: 78 },
      { name: 'Java', level: 76 },
    ],
  },
  {
    category: 'Mobile & Otros',
    icon: '📱',
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/20',
    items: [
      { name: 'Android (Kotlin)', level: 72 },
      { name: 'Framer Motion', level: 70 },
      { name: 'Recharts', level: 80 },
      { name: 'jsPDF / ExcelJS', level: 78 },
    ],
  },
  {
    category: 'Herramientas',
    icon: '🛠️',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
    items: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'Vite', level: 85 },
      { name: 'Netlify / Vercel', level: 80 },
      { name: 'Figma', level: 68 },
    ],
  },
];

const levelLabel = (n) => {
  if (n >= 85) return 'Avanzado';
  if (n >= 72) return 'Inter-Avanzado';
  if (n >= 55) return 'Intermedio';
  return 'Básico';
};

const levelColor = (n) => {
  if (n >= 85) return 'text-violet-400';
  if (n >= 72) return 'text-fuchsia-400';
  if (n >= 55) return 'text-cyan-400';
  return 'text-gray-500';
};

export default function About() {
  return (
    <section id="sobre-mi" className="py-28 px-6 relative overflow-hidden">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="section-number">01. sobre mí</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Quién soy
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text column (2/5) */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-gray-300 leading-relaxed text-[15px]">
              Soy desarrollador <span className="text-violet-400 font-medium">Full Stack</span> con experiencia
              construyendo sistemas reales para negocios: desde sistemas POS hasta apps inmobiliarias
              y e-commerce con CMS.
            </p>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              Me especializo en <span className="text-cyan-400 font-medium">React, React Native y Firebase</span>,
              y también desarrollo apps <span className="text-violet-400 font-medium">Android con Kotlin</span>.
              Manejo Python a nivel intermedio y Java básico.
            </p>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              Me enfoco en código limpio, experiencias de usuario cuidadas y
              entregas que resuelven problemas concretos.
            </p>

            {/* Highlights */}
            <div className="pt-4 space-y-3">
              {[
                { icon: '⚡', text: 'Apps listas para producción' },
                { icon: '🎯', text: 'Enfoque en resultados reales' },
                { icon: '🔥', text: 'Firebase & arquitectura serverless' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Skills grid (3/5) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className={`relative rounded-2xl bg-gradient-to-br ${group.color} border ${group.border} p-5 overflow-hidden`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{group.icon}</span>
                  <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-300">{skill.name}</span>
                        <span className={`text-[10px] font-mono ${levelColor(skill.level)}`}>
                          {levelLabel(skill.level)}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
