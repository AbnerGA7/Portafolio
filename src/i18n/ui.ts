import PeruIcon from "@/components/icons/colored/PeruIcon.astro";
import USIcon from "@/components/icons/colored/USIcon.astro";
import type { Language } from "@/types/Language";

export const defaultLang = "es";

export const defaultLanguage: Language = {
  code: defaultLang,
  Icon: PeruIcon,
  title: "Español",
};

export const languages: Language[] = [
  defaultLanguage,
  {
    code: "en",
    Icon: USIcon,
    title: "English",
  },
];

export const ui = {
  en: {
    "site.title": "Abner Gonzales",
    "meta.title": "Abner Gonzales | Full Stack Developer",
    "meta.description":
      "Abner Gonzales | Full Stack Developer from Lima, Peru, specialized in React, React Native, Firebase and Android (Kotlin). Real-world apps for real businesses.",
    "meta.og.title": "Abner Gonzales | Full Stack Developer",
    "meta.og.description":
      "Real apps for real businesses: POS systems, real-estate management, e-commerce and Android apps built with React, Firebase and Kotlin.",
    "meta.og.site_name": "Abner Gonzales Portfolio",
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu.open": "Open menu",
    "nav.menu.close": "Close menu",
    "nav.theme": "Toggle light/dark theme",
    "nav.lang": "Change language",
    "home.available": "Available for freelance projects",
    "home.intro": "Hi, I'm Abner",
    "home.roles": [
      "Full Stack Developer",
      "React & React Native Dev",
      "Firebase Expert",
      "Android Developer",
    ],
    "home.description": `
      <span class="text-accent font-semibold">Full Stack Developer</span> who builds web and mobile apps for real businesses — from design to deploy, with clean code and concrete results. <br />
      I specialize in <span class="text-accent">React, React Native and Firebase</span>, and I also build native <span class="text-accent">Android apps with Kotlin</span>. <br />
      I've shipped <span class="text-accent">POS systems, real-estate platforms and e-commerce stores</span> that run in production every day.
    `,
    "home.contact-me": "Contact me:",
    "home.cta": "See my projects",
    "home.photo-alt": "Photo of Abner Gonzales",
    "skills.title": "Tech Stack",
    "skills.description": `
      The <span class="text-accent">technologies</span> I use every day to build
      production-ready web and mobile apps.
    `,
    "skills.categories.client": "Frontend",
    "skills.categories.mobile": "Mobile",
    "skills.categories.languages": "Languages",
    "skills.categories.backend": "Backend & DB",
    "skills.categories.libraries": "Libraries",
    "skills.categories.tools": "Tools",
    "experience.title": "My Experience",

    "experience.freelance.title": "Freelance Full Stack Developer",
    "experience.freelance.company": "Projects for businesses",
    "experience.freelance.description": `
      I design and develop complete systems for small businesses, from requirements gathering to deployment.
      I built <span class="text-accent">Smart Market Pro</span>, a point of sale and inventory system for a minimarket with expiration alerts, staff roles and cash register opening/closing;
      and <span class="text-accent">Las Torres</span>, a land-lot management platform with an interactive map, clients, advisors, payment installments and <span class="text-accent">Excel/PDF reports</span>.
      I also delivered an <span class="text-accent">e-commerce store with Sanity CMS</span>, an administrative dashboard with roles and charts, and a premium website for a design studio.
      I work with <span class="text-accent">React, Firebase and Tailwind CSS</span>, focusing on real-time data, a polished user experience and solutions that solve concrete problems.
    `,
    "experience.freelance.date": "Freelance · Present",

    "experience.android.title": "Android Developer",
    "experience.android.company": "Bella Market Mobile",
    "experience.android.description": `
      I'm developing a native <span class="text-accent">Android app with Kotlin</span> to manage sales and the cash register of a market,
      with an interface optimized for <span class="text-accent">tablets</span>, sales recording, inventory control and
      <span class="text-accent">real-time synchronization with Firebase</span>, following <span class="text-accent">Material Design</span> guidelines and the Jetpack ecosystem.
    `,
    "experience.android.date": "In development",

    "experience.education.title": "Software Engineering Student",
    "experience.education.company": "University education · Lima, Peru",
    "experience.education.description": `
      Studying <span class="text-accent">Software Engineering</span>, where I built solid foundations in programming logic,
      <span class="text-accent">relational databases (SQL Server)</span>, object-oriented programming with <span class="text-accent">Java</span> and <span class="text-accent">Python</span>,
      and modern web development with <span class="text-accent">HTML, CSS, JavaScript, Angular and Node.js</span>.
    `,
    "experience.education.date": "In progress",

    "projects.title": "Projects",
    "projects.description": `
      <span class="text-accent">Real apps</span> built with modern technology —
      systems that <span class="text-accent">run in production</span> for real businesses.
    `,
    "projects.filter.label": "Filter projects by category",
    "projects.filter.all": "All",
    "projects.category.web": "Web App",
    "projects.category.mobile": "Mobile App",
    "projects.category.ecommerce": "E-commerce",
    "projects.category.landing": "Landing Page",
    "projects.status.production": "In production",
    "projects.status.completed": "Completed",
    "projects.status.development": "In development",

    "projects.smart_market.title": "Smart Market Pro",
    "projects.smart_market.tagline": "POS & Inventory System",
    "projects.smart_market.description":
      "Web platform to run a minimarket: fast point of sale, inventory with expiration alerts, staff management with roles, cash register opening/closing and a real-time metrics dashboard.",

    "projects.las_torres.title": "Las Torres — Land Lots",
    "projects.las_torres.tagline": "Real-Estate Management",
    "projects.las_torres.description":
      "System for a land-lot development: interactive map with per-lot status, clients and sales advisors, payment installments, Excel/PDF reports and a sales metrics dashboard.",

    "projects.admin_cactus.title": "Admin Cactus",
    "projects.admin_cactus.tagline": "Admin Dashboard",
    "projects.admin_cactus.description":
      "Administrative dashboard with authentication, inventory management, interactive charts, PDF report export and role-based user access control.",

    "projects.expresate.title": "Exprésate",
    "projects.expresate.tagline": "Design & Print Boutique",
    "projects.expresate.description":
      "Premium website for a creative print and design studio: interactive order configurator, luxury-styled service catalog and contact form.",

    "projects.bella_market.title": "Bella Market Mobile",
    "projects.bella_market.tagline": "Android POS App",
    "projects.bella_market.description":
      "Native Android app for sales and cash register management. Tablet-optimized interface, sales recording, inventory control and real-time synchronization.",

    "projects.gcorp_store.title": "GCorp Store",
    "projects.gcorp_store.tagline": "Full-stack E-commerce",
    "projects.gcorp_store.description":
      "Online store built with React + Sanity CMS. Cart with Context API, Framer Motion animations, dynamic catalog and an admin panel to manage products, categories and banners.",

    "projects.mnist.title": "MNIST Digit Recognizer",
    "projects.mnist.tagline": "Offline AI on Android",
    "projects.mnist.description":
      "Android app in Kotlin that recognizes handwritten digits (0-9) on the device, without Internet: a CNN trained on MNIST with Python and converted to TensorFlow Lite.",

    "projects.button.demo": "View demo",
    "projects.button.private": "Private demo",
    "projects.button.apk": "Download APK",
    "projects.button.code": "Code",
    "about.title": `
      I build <span class="text-accent">apps</span> that
      <span class="text-accent">solve</span>,
      <span class="text-accent">sell</span> and
      <span class="text-accent">grow businesses</span>.
    `,
    "about.who.title-1": "Who am I?",
    "about.who.description-1": `
      <span class="text-accent">Full Stack Developer</span> and Software Engineering student from Lima, Peru. I build real systems for businesses: from POS systems to real-estate apps and e-commerce with a CMS. I specialize in <span class="text-accent">React, React Native and Firebase</span>, and I also develop <span class="text-accent">Android apps with Kotlin</span>.
    `,
    "about.who.title-2": "My Approach",
    "about.who.description-2": `
      I focus on <span class="text-accent">clean code</span>, <span class="text-accent">polished user experiences</span> and deliveries that solve concrete problems. I enjoy <span class="text-accent">Firebase and serverless architecture</span> to ship production-ready apps quickly, without sacrificing quality.
    `,
    "about.personal.name": "Name",
    "about.personal.place": "Location",
    "about.personal.education": "Education",
    "about.personal.education.value": "Software Engineering",
    "about.timeline.foundation.title": "Foundation: Software Engineering",
    "about.timeline.foundation.desc": `
      I started my <span class="font-medium text-accent">Software Engineering</span> degree, building foundations in programming logic, relational databases with SQL Server, and object-oriented programming.
    `,

    "about.timeline.transition.title": "First Steps: Frontend",
    "about.timeline.transition.desc": `
      I fell in love with frontend development: <span class="text-accent">HTML, CSS and JavaScript</span>, then Angular and Node.js. I published my first portfolio and started building personal projects to grow.
    `,

    "about.timeline.growth.title": "Growth: Real Projects for Businesses",
    "about.timeline.growth.desc": `
      I made the jump to production: a <span class="text-accent">POS and inventory system</span>, a <span class="text-accent">land-lot management platform</span> and an <span class="text-accent">e-commerce store with Sanity CMS</span>, all used by real businesses.
    `,

    "about.timeline.focus.title": "Current Focus: Full Stack & Mobile",
    "about.timeline.focus.desc": `
      Building web apps with <span class="text-accent">React and Firebase</span> and native <span class="text-accent">Android apps with Kotlin</span>, focused on real-time data, reporting and experiences optimized for every device.
    `,

    "about.closing": `
      I'm motivated to <span class="font-semibold text-accent">keep learning every day</span> and to <span class="font-semibold text-accent">turn ideas into apps that work</span> — useful, fast and ready for production.
    `,

    "contact.title": "Let's Talk!",
    "contact.subtitle": `<span class="text-accent">Available for freelance projects</span> — Got a project? I usually reply in less than 24 hours`,

    "contact.github.title": "GitHub",
    "contact.github.description": "Explore my code & projects",
    "contact.github.url": "https://github.com/AbnerGA7",

    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.description": "Connect with me professionally",
    "contact.linkedin.url": "https://www.linkedin.com/in/abnergonzales7/",

    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.description": "+51 904 100 380 — message me directly",
    "contact.whatsapp.url":
      "https://wa.me/51904100380?text=Hi%20Abner%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20to%20you.",

    "contact.email.title": "Email",
    "contact.email.description": "abner.gonzales.work@gmail.com",
    "contact.email.url":
      "mailto:abner.gonzales.work@gmail.com?subject=Hi%20Abner%20-%20Portfolio&body=Hi%20Abner%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20to%20you.",

    "contact.instagram.title": "Instagram",
    "contact.instagram.description": "@abner_gonzales7",
    "contact.instagram.url": "https://www.instagram.com/abner_gonzales7",

    "contact.facebook.title": "Facebook",
    "contact.facebook.description": "Abner Gonzales",
    "contact.facebook.url": "https://www.facebook.com/abnerGonzalesA.7",

    "contact.form.title": "Send Me a Message",
    "contact.form.name.label": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email.label": "Email",
    "contact.form.email.placeholder": "you@email.com",
    "contact.form.message.label": "Message",
    "contact.form.message.placeholder": "Tell me about your project...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully!",
    "contact.form.error": "Something went wrong. Please try again.",
    "contact.form.subject": "New message from the portfolio",

    "footer.description":
      "Full Stack Developer · React · Firebase · Android | Real apps for real businesses",
    "footer.copyright": "Abner Gonzales. All rights reserved.",
    "scroll-top": "Back to top",
  },
  es: {
    "site.title": "Abner Gonzales",
    "meta.title": "Abner Gonzales | Full Stack Developer",
    "meta.description":
      "Portafolio de Abner Gonzales — desarrollador Full Stack en Lima, Perú, especializado en React, React Native, Firebase y Android (Kotlin). Apps reales para negocios reales.",
    "meta.og.title": "Abner Gonzales | Full Stack Developer",
    "meta.og.description":
      "Proyectos reales para negocios reales: sistemas POS, gestión inmobiliaria, e-commerce y apps Android con React, Firebase y Kotlin.",
    "meta.og.site_name": "Portafolio de Abner Gonzales",
    "nav.home": "Inicio",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.menu.open": "Abrir menú",
    "nav.menu.close": "Cerrar menú",
    "nav.theme": "Cambiar tema claro/oscuro",
    "nav.lang": "Cambiar idioma",
    "home.available": "Disponible para proyectos freelance",
    "home.intro": "Hola, soy Abner",
    "home.roles": [
      "Full Stack Developer",
      "React & React Native Dev",
      "Firebase Expert",
      "Android Developer",
    ],
    "home.description": `
      <span class="text-accent font-semibold">Desarrollador Full Stack</span> que construye apps web y móviles reales para negocios reales — del diseño al deploy, con código limpio y resultados concretos. <br />
      Me especializo en <span class="text-accent">React, React Native y Firebase</span>, y también desarrollo apps <span class="text-accent">Android nativas con Kotlin</span>. <br />
      He llevado a producción <span class="text-accent">sistemas POS, plataformas inmobiliarias y tiendas e-commerce</span> que se usan todos los días.
    `,
    "home.contact-me": "Contáctame:",
    "home.cta": "Ver mis proyectos",
    "home.photo-alt": "Foto de Abner Gonzales",
    "skills.title": "Stack Tecnológico",
    "skills.description": `
      Las <span class="text-accent">tecnologías</span> que uso día a día para construir
      apps web y móviles listas para producción.
    `,
    "skills.categories.client": "Frontend",
    "skills.categories.mobile": "Mobile",
    "skills.categories.languages": "Lenguajes",
    "skills.categories.backend": "Backend & BD",
    "skills.categories.libraries": "Librerías",
    "skills.categories.tools": "Herramientas",
    "experience.title": "Mi Experiencia",

    "experience.freelance.title": "Desarrollador Full Stack Freelance",
    "experience.freelance.company": "Proyectos para negocios",
    "experience.freelance.description": `
      Diseño y desarrollo sistemas completos para pequeños negocios, desde el levantamiento de requisitos hasta el despliegue.
      Construí <span class="text-accent">Smart Market Pro</span>, un punto de venta e inventario para un minimarket con alertas de vencimiento, roles de staff y apertura/cierre de caja;
      y <span class="text-accent">Las Torres</span>, una plataforma de gestión de lotes con mapa interactivo, clientes, asesores, cuotas de pago y <span class="text-accent">reportes en Excel/PDF</span>.
      También entregué una <span class="text-accent">tienda e-commerce con Sanity CMS</span>, un panel administrativo con roles y gráficas, y un sitio premium para un estudio de diseño.
      Trabajo con <span class="text-accent">React, Firebase y Tailwind CSS</span>, priorizando datos en tiempo real, una experiencia de usuario cuidada y soluciones que resuelven problemas concretos.
    `,
    "experience.freelance.date": "Freelance · Actualidad",

    "experience.android.title": "Desarrollador Android",
    "experience.android.company": "Bella Market Mobile",
    "experience.android.description": `
      Desarrollo una app <span class="text-accent">Android nativa con Kotlin</span> para la gestión de ventas y caja de un market,
      con interfaz optimizada para <span class="text-accent">tablets</span>, registro de ventas, control de inventario y
      <span class="text-accent">sincronización en tiempo real con Firebase</span>, siguiendo los lineamientos de <span class="text-accent">Material Design</span> y el ecosistema Jetpack.
    `,
    "experience.android.date": "En desarrollo",

    "experience.education.title": "Estudiante de Ingeniería de Software",
    "experience.education.company": "Formación universitaria · Lima, Perú",
    "experience.education.description": `
      Curso la carrera de <span class="text-accent">Ingeniería de Software</span>, donde formé bases sólidas en lógica de programación,
      <span class="text-accent">bases de datos relacionales (SQL Server)</span>, programación orientada a objetos con <span class="text-accent">Java</span> y <span class="text-accent">Python</span>,
      y desarrollo web moderno con <span class="text-accent">HTML, CSS, JavaScript, Angular y Node.js</span>.
    `,
    "experience.education.date": "En curso",

    "projects.title": "Proyectos",
    "projects.description": `
      <span class="text-accent">Apps reales</span> con tecnología moderna —
      sistemas que <span class="text-accent">funcionan en producción</span> para negocios reales.
    `,
    "projects.filter.label": "Filtrar proyectos por categoría",
    "projects.filter.all": "Todos",
    "projects.category.web": "Web App",
    "projects.category.mobile": "Mobile App",
    "projects.category.ecommerce": "E-commerce",
    "projects.category.landing": "Landing Page",
    "projects.status.production": "Producción",
    "projects.status.completed": "Completado",
    "projects.status.development": "En desarrollo",

    "projects.smart_market.title": "Smart Market Pro",
    "projects.smart_market.tagline": "Sistema POS & Inventario",
    "projects.smart_market.description":
      "Plataforma web para administrar un minimarket: punto de venta rápido, inventario con alertas de vencimiento, gestión de staff con roles, apertura/cierre de caja y dashboard con métricas en tiempo real.",

    "projects.las_torres.title": "Las Torres — Lotes",
    "projects.las_torres.tagline": "Gestión Inmobiliaria",
    "projects.las_torres.description":
      "Sistema para urbanización de lotes: mapa interactivo con estado por lote, control de clientes y asesores, cuotas de pago, reportes Excel/PDF y dashboard de métricas de ventas.",

    "projects.admin_cactus.title": "Admin Cactus",
    "projects.admin_cactus.tagline": "Panel Administrativo",
    "projects.admin_cactus.description":
      "Dashboard administrativo con autenticación, gestión de inventario, gráficas interactivas, exportación de reportes PDF y control de usuarios con roles de acceso.",

    "projects.expresate.title": "Exprésate",
    "projects.expresate.tagline": "Boutique de Diseño & Impresión",
    "projects.expresate.description":
      "Sitio web premium para un estudio creativo de impresión y diseño. Configurador de pedidos interactivo, catálogo de servicios con estética de lujo y formulario de contacto.",

    "projects.bella_market.title": "Bella Market Mobile",
    "projects.bella_market.tagline": "App Android para POS",
    "projects.bella_market.description":
      "Aplicación Android nativa para gestión de ventas y caja. Interfaz optimizada para tablets, registro de ventas, control de inventario y sincronización en tiempo real.",

    "projects.gcorp_store.title": "GCorp Store",
    "projects.gcorp_store.tagline": "E-commerce Fullstack",
    "projects.gcorp_store.description":
      "Tienda online con React + Sanity CMS. Carrito con Context API, animaciones Framer Motion, catálogo dinámico y panel admin para gestionar productos, categorías y banners.",

    "projects.mnist.title": "Reconocedor de dígitos MNIST",
    "projects.mnist.tagline": "IA offline en Android",
    "projects.mnist.description":
      "App Android en Kotlin que reconoce dígitos escritos a mano (0-9) en el propio dispositivo, sin Internet: una CNN entrenada con MNIST en Python y convertida a TensorFlow Lite.",

    "projects.button.demo": "Ver demo",
    "projects.button.private": "Demo privada",
    "projects.button.apk": "Descargar APK",
    "projects.button.code": "Código",
    "about.title": `
      Construyo <span class="text-accent">apps</span> que
      <span class="text-accent">resuelven</span>,
      <span class="text-accent">venden</span> y
      <span class="text-accent">hacen crecer negocios</span>.
    `,
    "about.who.title-1": "¿Quién soy?",
    "about.who.description-1": `
      <span class="text-accent">Desarrollador Full Stack</span> y estudiante de Ingeniería de Software en Lima, Perú. Construyo sistemas reales para negocios: desde sistemas POS hasta apps inmobiliarias y e-commerce con CMS. Me especializo en <span class="text-accent">React, React Native y Firebase</span>, y también desarrollo apps <span class="text-accent">Android con Kotlin</span>.
    `,

    "about.who.title-2": "Mi enfoque",
    "about.who.description-2": `
      Me enfoco en <span class="text-accent">código limpio</span>, <span class="text-accent">experiencias de usuario cuidadas</span> y entregas que resuelven problemas concretos. Me apoyo en <span class="text-accent">Firebase y la arquitectura serverless</span> para llevar apps a producción rápido, sin sacrificar calidad.
    `,

    "about.personal.name": "Nombre",
    "about.personal.place": "Ubicación",
    "about.personal.education": "Educación",
    "about.personal.education.value": "Ingeniería de Software",

    "about.timeline.foundation.title": "Base: Ingeniería de Software",
    "about.timeline.foundation.desc": `
      Inicié la carrera de <span class="font-medium text-accent">Ingeniería de Software</span>, formando bases en lógica de programación, bases de datos relacionales con SQL Server y programación orientada a objetos.
    `,

    "about.timeline.transition.title": "Primeros pasos: Frontend",
    "about.timeline.transition.desc": `
      Me apasioné por el desarrollo frontend: <span class="text-accent">HTML, CSS y JavaScript</span>, luego Angular y Node.js. Publiqué mi primer portafolio y empecé a crear proyectos personales para crecer.
    `,

    "about.timeline.growth.title": "Crecimiento: Proyectos reales para negocios",
    "about.timeline.growth.desc": `
      Di el salto a producción: un <span class="text-accent">sistema POS e inventario</span>, una <span class="text-accent">plataforma de gestión de lotes</span> y una <span class="text-accent">tienda e-commerce con Sanity CMS</span>, todos usados por negocios reales.
    `,

    "about.timeline.focus.title": "Enfoque actual: Full Stack & Mobile",
    "about.timeline.focus.desc": `
      Desarrollo apps web con <span class="text-accent">React y Firebase</span> y apps <span class="text-accent">Android nativas con Kotlin</span>, enfocado en datos en tiempo real, reportes y experiencias optimizadas para cada dispositivo.
    `,

    "about.closing": `
      Me motiva <span class="font-semibold text-accent">aprender cada día</span> y <span class="font-semibold text-accent">convertir ideas en apps que funcionan</span> — útiles, rápidas y listas para producción.
    `,

    "contact.title": "¡Hablemos!",
    "contact.subtitle": `<span class="text-accent">Disponible para proyectos freelance</span> — ¿Tienes un proyecto? Suelo responder en menos de 24 horas`,

    "contact.github.title": "GitHub",
    "contact.github.description": "Explora mi código y proyectos",
    "contact.github.url": "https://github.com/AbnerGA7",

    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.description": "Conéctate conmigo profesionalmente",
    "contact.linkedin.url": "https://www.linkedin.com/in/abnergonzales7/",

    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.description": "+51 904 100 380 — escríbeme directo",
    "contact.whatsapp.url":
      "https://wa.me/51904100380?text=Hola%20Abner%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo.",

    "contact.email.title": "Correo",
    "contact.email.description": "abner.gonzales.work@gmail.com",
    "contact.email.url":
      "mailto:abner.gonzales.work@gmail.com?subject=Hola%20Abner%20-%20Portafolio&body=Hola%20Abner%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo.",

    "contact.instagram.title": "Instagram",
    "contact.instagram.description": "@abner_gonzales7",
    "contact.instagram.url": "https://www.instagram.com/abner_gonzales7",

    "contact.facebook.title": "Facebook",
    "contact.facebook.description": "Abner Gonzales",
    "contact.facebook.url": "https://www.facebook.com/abnerGonzalesA.7",

    "contact.form.title": "Envíame un mensaje",
    "contact.form.name.label": "Nombre",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email.label": "Correo",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.message.label": "Mensaje",
    "contact.form.message.placeholder": "Cuéntame sobre tu proyecto...",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "¡Mensaje enviado con éxito!",
    "contact.form.error": "Algo salió mal. Por favor, inténtalo de nuevo.",
    "contact.form.subject": "Nuevo mensaje desde el portafolio",

    "footer.description":
      "Full Stack Developer · React · Firebase · Android | Apps reales para negocios reales",
    "footer.copyright": "Abner Gonzales. Todos los derechos reservados.",
    "scroll-top": "Volver arriba",
  },
} as const;
