'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre mí', id: 'sobre-mi' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Contacto', id: 'contacto' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const current = sections.reduce((acc, sec) => {
        if (sec && window.scrollY >= sec.offsetTop - 120) return sec.id;
        return acc;
      }, 'inicio');
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#090910]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('inicio')}
          className="group flex items-center gap-2"
        >
          <span className="text-xl font-black font-mono bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            AG
          </span>
          <span className="text-white/20 text-lg font-light">/</span>
          <span className="text-xs text-gray-500 font-mono hidden sm:block group-hover:text-gray-300 transition-colors">
            dev
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  active === l.id
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-200'
                }`}
              >
                {active === l.id && (
                  <span className="absolute inset-0 rounded-lg bg-violet-500/10 border border-violet-500/20" />
                )}
                <span className="relative">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('contacto')}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl btn-primary text-sm"
        >
          Contrátame
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          <span className={`block h-0.5 bg-gray-300 transition-all duration-300 ${open ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
          <span className={`block h-0.5 bg-gray-300 transition-all duration-300 ${open ? 'opacity-0 w-5' : 'w-3.5'}`} />
          <span className={`block h-0.5 bg-gray-300 transition-all duration-300 ${open ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="bg-[#090910]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => { scrollTo(l.id); setOpen(false); }}
                  className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => { scrollTo('contacto'); setOpen(false); }}
            className="mt-3 w-full py-3 rounded-xl btn-primary text-sm text-center"
          >
            Contrátame
          </button>
        </div>
      </div>
    </header>
  );
}
