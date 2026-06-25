'use client';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono font-bold text-sm bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          AG / dev
        </span>
        <p className="text-xs text-gray-700">
          &copy; {new Date().getFullYear()} Abner Gonzales &mdash; Construido con Next.js + Tailwind
        </p>
        <button
          onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-xs text-gray-700 hover:text-violet-400 transition-colors font-mono"
        >
          volver arriba ↑
        </button>
      </div>
    </footer>
  );
}
