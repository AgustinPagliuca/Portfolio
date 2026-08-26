// Portfolio Data - Agustín Pagliuca

export const personalInfo = {
  name: 'Agustín',
  lastName: 'Pagliuca',
  fullName: 'Agustín Pagliuca',
  title: 'Desarrollador Fullstack',
  subtitle: 'React · Spring · .NET · SQL',
  yearsExperience: '+2',
  email: 'agustinpagliuca1@gmail.com',
  location: 'Buenos Aires, Argentina',
  linkedin: 'https://www.linkedin.com/in/agustin-pagliuca-6836b7237/',
  github: 'https://github.com/AgustinPagliuca',
  profileImage: '/Portfolio/foto-perfil.jpeg',
  cvUrl: '/Portfolio/Agustin_Pagliuca_CV_Fullstack_ES.pdf',
  seoDescription: 'Portfolio de Agustín Pagliuca, Desarrollador Fullstack con experiencia en React y SQL Server. Especializándome en backend con Java, Spring, C# y .NET Core. Buenos Aires, Argentina.'
};

export const heroStats = [
  { label: 'para proyectos', value: 'Disponible', live: true },
  { label: 'de experiencia', value: '+2 años' },
  { label: 'en producción', value: '4 proyectos' },
  { label: 'Argentina', value: 'Buenos Aires' }
];

export const expertise = [
  {
    num: '01',
    title: 'Frontend',
    tag: '<React /> <Astro />',
    description: 'Interfaces responsivas y rápidas: componentes reutilizables, estado con Context API, Tailwind y optimización de rendimiento.'
  },
  {
    num: '02',
    title: 'Backend',
    tag: 'Java · Spring · C# · .NET',
    description: 'APIs RESTful y lógica de negocio robusta con ASP.NET Core y Spring, autenticación con roles y arquitectura en capas.'
  },
  {
    num: '03',
    title: 'Datos & APIs',
    tag: 'SQL Server · EF Core',
    description: 'Modelado de bases de datos, consultas eficientes en SQL Server e integración de datos con Entity Framework y Supabase.'
  }
];

export const experience = [
  {
    id: 1,
    title: 'Estudiante Analista de Sistemas',
    company: 'ORT Argentina',
    period: '2025 — presente',
    description: 'Análisis de sistemas, arquitectura de software, bases de datos y metodologías de desarrollo, con aplicación práctica en proyectos académicos.',
    stack: ['Arquitectura', 'Bases de datos', 'Metodologías']
  },
  {
    id: 2,
    title: 'Desarrollador Front-End Freelance',
    company: 'Independiente',
    period: '2024 — presente',
    description: 'Interfaces responsivas con React y Tailwind, componentes reutilizables, integración de APIs RESTful, estado con Context API y trabajo ágil (Scrum).',
    stack: ['React', 'Tailwind', 'APIs REST', 'Scrum']
  },
  {
    id: 3,
    title: 'Formación Continua',
    company: 'EducacionIT · Coderhouse · CC Rojas',
    period: '2022 — 2024',
    description: 'JavaScript Avanzado (2024), Responsive Web Design (2023) e Introducción a la Programación (2022), con proyectos prácticos.',
    stack: ['JavaScript', 'Responsive', 'Fundamentos']
  }
];

export const projects = [
  {
    id: 5,
    title: 'BurgApp',
    description: 'App mobile para descubrir hamburgueserías: tendencias, lugares cerca tuyo y recomendaciones personalizadas, con mapa, reseñas y diario de visitas.',
    category: 'Mobile',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    comingSoon: true,
    eta: '2026',
    link: null,
    github: null
  },
  {
    id: 4,
    title: 'Oudora',
    description: 'E-commerce de perfumería de nicho: catálogo por marcas, checkout en cuotas con MercadoPago, pedidos por WhatsApp y panel de administración propio.',
    image: '/Portfolio/assets/oudora-preview.png',
    category: 'Fullstack',
    tech: ['Astro', 'TypeScript', 'Supabase', 'PostgreSQL'],
    link: 'https://oudora-teal.vercel.app/',
    github: null
  },
  {
    id: 3,
    title: 'CineCore',
    description: 'Sistema de administración de cine: CRUD de películas, salas y funciones, reserva visual de butacas, panel de empleados y roles con ASP.NET Identity.',
    image: 'https://raw.githubusercontent.com/AgustinPagliuca/CineCore/main/docs/screenshots/01-home-carrusel.png',
    category: 'Backend',
    tech: ['C#', '.NET 10', 'ASP.NET Core MVC', 'EF Core', 'SQL Server'],
    link: 'https://github.com/AgustinPagliuca/CineCore',
    github: 'https://github.com/AgustinPagliuca/CineCore'
  },
  {
    id: 1,
    title: 'MeteoroLed',
    description: 'Landing para alquiler de pantallas LED para eventos: catálogo, portfolio de proyectos, animaciones on-scroll y formulario de contacto.',
    image: 'https://meteoroled.com.ar/images/image4.jpeg',
    category: 'Frontend',
    tech: ['Astro', 'React', 'Tailwind', 'JavaScript'],
    link: 'https://meteoroled.com.ar/',
    github: null
  },
  {
    id: 2,
    title: 'Espacio Dérmico',
    description: 'Landing para centro de estética y bienestar: diseño responsive con Tailwind y formularios de contacto funcionales.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    category: 'Frontend',
    tech: ['React', 'Vite', 'Tailwind', 'JavaScript'],
    link: 'https://agustinpagliuca.github.io/EspacioDermico/',
    github: 'https://github.com/AgustinPagliuca/EspacioDermico'
  }
];

export const aboutMe = {
  paragraphs: [
    'Estudiante de Analista de Sistemas y desarrollador fullstack, apasionado por la programación desde temprana edad. Con experiencia en React, desarrollo de interfaces y consumo de APIs RESTful, y sólidos conocimientos en SQL Server y metodologías ágiles.',
    'Hoy estoy enfocando mi crecimiento en el backend con Java, Spring, C# y .NET Core para crear soluciones robustas y escalables.',
    'Me motiva trabajar en equipos colaborativos — con experiencia real en Scrum y Jira — y aportar soluciones que aguanten el paso del tiempo.'
  ]
};

export const menuItems = [
  { id: 'expertise', label: 'expertise' },
  { id: 'proyectos', label: 'proyectos' },
  { id: 'experiencia', label: 'experiencia' },
  { id: 'sobre-mi', label: 'sobre-mí' }
];
