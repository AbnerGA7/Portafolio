'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = [
  'Full Stack Developer',
  'React & React Native Dev',
  'Firebase Expert',
  'Android Developer',
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full opacity-20 animate-pulse"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)' }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-300/80 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
              Disponible para nuevos proyectos
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.1]">
              <span className="block text-white">Abner</span>
              <span className="block text-gradient">Gonzales</span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 flex items-center justify-center md:justify-start mb-6">
              <span className="text-lg md:text-xl font-mono text-gray-400">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 animate-pulse" />
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
              Construyo apps web y móviles reales para negocios reales.
              Del diseño al deploy — código limpio, resultados concretos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <button
                onClick={() => scrollTo('proyectos')}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl btn-primary"
              >
                Ver proyectos
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('contacto')}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-200"
              >
                Contactar
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center justify-center md:justify-start gap-8">
              {[
                { num: '6+', label: 'Proyectos' },
                { num: '5+', label: 'Tecnologías' },
                { num: '100%', label: 'Dedicación' },
              ].map((s, i) => (
                <div key={s.label} className="text-center md:text-left">
                  {i > 0 && <div className="hidden md:block absolute w-px h-8 bg-white/10 -ml-4 mt-1" />}
                  <div className="text-2xl font-bold text-gradient-warm">{s.num}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex-shrink-0 order-1 md:order-2 flex flex-col items-center gap-4 animate-float">
            <div className="photo-ring animate-pulse-glow">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden bg-surface-2">
                <Image
                  src="/perfil.jpg"
                  alt="Abner Gonzales"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Tech bubbles around photo */}
            <div className="flex gap-2 flex-wrap justify-center max-w-[220px]">
              {['React', 'Next.js', 'Firebase', 'Android'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('sobre-mi')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
