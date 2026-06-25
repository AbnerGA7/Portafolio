'use client';
import { useState } from 'react';

const EMAIL = 'abner.gonzales.work@gmail.com';

const socials = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    bg: 'from-violet-600/20 to-violet-600/5',
    border: 'border-violet-500/20',
    iconColor: '#a78bfa',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+51 904 100 380',
    href: 'https://wa.me/51904100380',
    bg: 'from-emerald-600/20 to-emerald-600/5',
    border: 'border-emerald-500/20',
    iconColor: '#34d399',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@abner_gonzales7',
    href: 'https://www.instagram.com/abner_gonzales7',
    bg: 'from-pink-600/20 to-pink-600/5',
    border: 'border-pink-500/20',
    iconColor: '#f472b6',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: 'Abner Gonzales',
    href: 'https://www.facebook.com/abnerGonzalesA.7',
    bg: 'from-blue-600/20 to-blue-600/5',
    border: 'border-blue-500/20',
    iconColor: '#60a5fa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Abner Gonzales',
    href: 'https://www.linkedin.com/in/abnergonzales7/',
    bg: 'from-sky-600/20 to-sky-600/5',
    border: 'border-sky-500/20',
    iconColor: '#38bdf8',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto — ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="min-h-[100svh] snap-start py-16 md:py-24 px-6 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12">
          <span className="section-number">03. contacto</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Hablemos</h2>
          <p className="text-gray-500 mt-3 max-w-md text-[15px]">
            Tienes un proyecto? Escríbeme y te respondo lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs text-gray-500 mb-1.5 font-mono">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-[#12121e] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 font-mono">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full bg-[#12121e] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all resize-none"
              />
            </div>
            <button type="submit" className="w-full py-3.5 rounded-xl btn-primary text-sm">
              {sent ? '¡Abriendo tu correo...' : 'Enviar mensaje'}
            </button>
          </form>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-6">Contáctame también por:</h3>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br ${s.bg} border ${s.border} hover:scale-[1.02] transition-all duration-200 group`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ color: s.iconColor, backgroundColor: s.iconColor + '15' }}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-600 font-mono">{s.label}</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{s.value}</div>
                </div>
                <svg className="w-4 h-4 text-gray-700 group-hover:text-gray-400 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}

            {/* Availability note */}
            <div className="mt-6 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Disponible para proyectos freelance
              </div>
              <p className="text-xs text-gray-600 mt-1.5">
                Tiempo de respuesta promedio: menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
