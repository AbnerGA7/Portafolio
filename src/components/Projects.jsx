'use client';
import { useState } from 'react';

const projects = [
  {
    id: 'smart-market-pro',
    name: 'Smart Market Pro',
    tagline: 'Sistema POS & Inventario',
    description:
      'Plataforma web para administrar un minimarket: punto de venta rápido, inventario con alertas de vencimiento, gestión de staff con roles, apertura/cierre de caja y dashboard con métricas en tiempo real.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    category: 'Web App',
    status: 'Producción',
    gradient: 'from-emerald-600/30 via-teal-600/10 to-transparent',
    accentColor: '#10b981',
    icon: '🛒',
    demo: null,
    github: null,
  },
  {
    id: 'las-torres-lotes',
    name: 'Las Torres — Lotes',
    tagline: 'Gestión Inmobiliaria',
    description:
      'Sistema para urbanización de lotes: mapa interactivo con estado por lote, control de clientes y asesores, cuotas de pago, reportes Excel/PDF y dashboard de métricas de ventas.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Recharts', 'jsPDF'],
    category: 'Web App',
    status: 'Producción',
    gradient: 'from-blue-600/30 via-indigo-600/10 to-transparent',
    accentColor: '#3b82f6',
    icon: '🏗️',
    demo: 'https://las-torres-demo.netlify.app',
    github: null,
  },
  {
    id: 'admin-cactus',
    name: 'Admin Cactus',
    tagline: 'Panel Administrativo',
    description:
      'Dashboard administrativo con autenticación, gestión de inventario, gráficas interactivas, exportación de reportes PDF y control de usuarios con roles de acceso.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Recharts', 'jsPDF'],
    category: 'Web App',
    status: 'Completado',
    gradient: 'from-violet-600/30 via-purple-600/10 to-transparent',
    accentColor: '#8b5cf6',
    icon: '📊',
    demo: null,
    github: null,
  },
  {
    id: 'expresate',
    name: 'Exprésate',
    tagline: 'Boutique de Diseño & Impresión',
    description:
      'Sitio web premium para un estudio creativo de impresión y diseño. Configurador de pedidos interactivo, catálogo de servicios con estética de lujo y formulario de contacto.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Google Fonts'],
    category: 'Landing Page',
    status: 'Completado',
    gradient: 'from-rose-600/30 via-pink-600/10 to-transparent',
    accentColor: '#f43f5e',
    icon: '🎨',
    demo: null,
    github: null,
  },
  {
    id: 'bella-market-mobil',
    name: 'Bella Market Mobile',
    tagline: 'App Android para POS',
    description:
      'Aplicación Android nativa para gestión de ventas y caja. Interfaz optimizada para tablets, registro de ventas, control de inventario y sincronización en tiempo real.',
    tags: ['Android', 'Kotlin', 'Jetpack', 'Firebase', 'Material Design'],
    category: 'Mobile App',
    status: 'En desarrollo',
    gradient: 'from-amber-600/30 via-orange-600/10 to-transparent',
    accentColor: '#f59e0b',
    icon: '📱',
    demo: null,
    github: null,
  },
  {
    id: 'freestore-fullstack',
    name: 'FreeStore',
    tagline: 'E-commerce Fullstack',
    description:
      'Tienda online con React + Sanity CMS. Carrito con Context API, animaciones Framer Motion, catálogo dinámico y panel admin para gestionar productos, categorías y banners.',
    tags: ['React', 'Sanity CMS', 'Tailwind', 'Framer Motion'],
    category: 'E-commerce',
    status: 'Producción',
    gradient: 'from-cyan-600/30 via-sky-600/10 to-transparent',
    accentColor: '#22d3ee',
    icon: '🛍️',
    demo: 'https://frees-store-peru.netlify.app/',
    github: null,
  },
];

const categories = ['Todos', 'Web App', 'Mobile App', 'E-commerce', 'Landing Page'];

const statusStyle = {
  Producción: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  'En desarrollo': 'bg-amber-500/10 text-amber-400 border-amber-500/25',
  Completado: 'bg-gray-500/10 text-gray-400 border-gray-500/25',
};

export default function Projects() {
  const [active, setActive] = useState('Todos');
  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="proyectos" className="min-h-[100svh] snap-start py-16 md:py-24 px-6 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-10">
          <span className="section-number">02. proyectos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Lo que construí
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg text-[15px]">
            Apps reales con tecnología moderna — sistemas que funcionan en producción para negocios reales.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-surface text-gray-500 hover:text-gray-200 border border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-violet-500/25 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-950/50 flex flex-col bg-[#12121e]">
      {/* Top gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-70 pointer-events-none`} />

      {/* Content */}
      <div className="relative p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
            style={{ backgroundColor: `${p.accentColor}18` }}
          >
            {p.icon}
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${statusStyle[p.status]}`}>
              {p.status}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-[17px] font-bold mb-0.5 transition-colors duration-200"
          style={{ color: '#f1f5f9' }}
        >
          {p.name}
        </h3>
        <p className="text-xs font-mono mb-3" style={{ color: p.accentColor + 'cc' }}>
          {p.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">{p.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
          {p.demo ? (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
              style={{ color: p.accentColor }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-gray-700 font-mono">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Demo privada
            </span>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
