import './globals.css';

export const metadata = {
  title: 'Abner Gonzales | Full Stack Developer',
  description: 'Portafolio de Abner Gonzales — desarrollador web Full Stack especializado en React, Next.js, Firebase y Android.',
  keywords: ['Abner Gonzales', 'Full Stack Developer', 'React', 'Next.js', 'Firebase', 'Portafolio'],
  openGraph: {
    title: 'Abner Gonzales | Full Stack Developer',
    description: 'Proyectos reales para negocios reales.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  );
}
