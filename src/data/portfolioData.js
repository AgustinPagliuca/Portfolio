// Portfolio Data - Agustín Pagliuca

export const personalInfo = {
  name: 'Agustín',
  lastName: 'Pagliuca',
  fullName: 'Agustín Pagliuca',
  title: 'Desarrollador Fullstack',
  subtitle: 'React · .NET · SQL',
  yearsExperience: '+2',
  email: 'agustinpagliuca1@gmail.com',
  phone: '+54-9-11-23448499',
  location: 'Buenos Aires, Argentina',
  linkedin: 'https://www.linkedin.com/in/agustin-pagliuca-6836b7237/',
  github: 'https://github.com/AgustinPagliuca',
  profileImage: '/Portfolio/foto-perfil.jpeg',
  cvUrl: '/Portfolio/cv-agustin-pagliuca.pdf',
  available: true,
  shortBio: 'Desarrollador Fullstack con experiencia en React y SQL Server, especializándome en backend con C# y .NET Core para crear soluciones robustas.',
  heroSubtitle: 'Experiencia en React, APIs RESTful y SQL Server. Actualmente especializándome en backend con C# y .NET Core. Me motiva trabajar en equipos colaborativos.',
  seoDescription: 'Portfolio de Agustín Pagliuca, Desarrollador Fullstack con experiencia en React y SQL Server. Especializándome en backend con C# y .NET Core. Buenos Aires, Argentina.'
};

export const aboutMe = {
  greeting: 'Hola 👋',
  paragraphs: [
    {
      text: 'soy Agustín Pagliuca, ',
      highlights: [
        { text: 'Estudiante de Analista de Sistemas', type: 'cyan' },
        { text: ' y ', type: 'normal' },
        { text: 'Desarrollador Fullstack', type: 'cyan' }
      ],
      suffix: '. Apasionado por la programación desde temprana edad, con experiencia en React, desarrollo de interfaces y consumo de APIs RESTful. Con sólidos conocimientos en SQL Server y metodologías ágiles, actualmente estoy enfocando mi crecimiento en el desarrollo backend con C# y .NET Core para crear soluciones robustas.'
    },
    {
      text: 'Entre mis fortalezas destaco el ',
      highlights: [
        { text: 'desarrollo de interfaces web responsivas', type: 'cyan-bold' }
      ],
      suffix: ', implementación de componentes reutilizables, manejo de estado con Context API y optimización de rendimiento en aplicaciones React.'
    },
    {
      text: 'Me motiva trabajar en ',
      highlights: [
        { text: 'equipos colaborativos', type: 'underline' }
      ],
      suffix: ' y aportar soluciones escalables. Tengo experiencia con metodologías ágiles (Scrum) y herramientas como Jira.'
    },
    {
      text: 'Por último, comparto mi hoja de vida actualizada, donde de manera más detallada especifico mi experiencia, logros y formación académica.',
      highlights: [],
      suffix: ''
    }
  ]
};

export const experience = [
  {
    id: 1,
    title: 'Desarrollador Front-End Freelance',
    company: 'Independiente',
    period: '2024 - Presente',
    description: 'Desarrollo de interfaces web responsivas con React.js y Tailwind. Implementación de componentes reutilizables y optimización de rendimiento. Diseño y desarrollo de interfaces utilizando HTML, CSS, JavaScript y ReactJs. Integración de APIs RESTful, manejo de estado con Context API. Pruebas funcionales y corrección de bugs en entornos ágiles (Scrum).'
  },
  {
    id: 2,
    title: 'Formación Continua',
    company: 'EducacionIT / Coderhouse / Centro Cultural Rector Ricardo Rojas',
    period: '2022 - 2024',
    description: 'Certificaciones en JavaScript Avanzado (EducacionIT, 2024), Responsive Web Design (Coderhouse, 2023) e Introducción a la Programación (Centro Cultural Rector Ricardo Rojas, 2022). Desarrollo de proyectos prácticos aplicando las tecnologías aprendidas.'
  },
  {
    id: 3,
    title: 'Estudiante Analista de Sistemas',
    company: 'ORT Argentina',
    period: '2025 - Presente',
    description: 'Formación integral en análisis de sistemas, arquitectura de software, bases de datos y metodologías de desarrollo. Aplicación práctica de conceptos en proyectos académicos.'
  }
];

export const projects = [
  {
    id: 1,
    title: 'MeteoroLed',
    description: 'Landing page para empresa de alquiler de pantallas LED para eventos en Buenos Aires. Incluye catálogo de productos, portfolio de proyectos, sección de servicios, animaciones con Intersection Observer y formulario de contacto.',
    image: 'https://meteoroled.com.ar/images/image4.jpeg',
    category: 'Frontend',
    tech: ['Astro', 'React', 'Tailwind', 'JavaScript'],
    link: 'https://meteoroled.com.ar/',
    github: '#'
  },
  {
    id: 2,
    title: 'Espacio Dérmico',
    description: 'Landing page para centro de estética y bienestar construida con Astro y React. Diseño responsive con Tailwind y formularios de contacto funcionales.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    category: 'Frontend',
    tech: ['Astro', 'React', 'Tailwind', 'JavaScript'],
    link: 'https://agustinpagliuca.github.io/EspacioDermico/',
    github: 'https://github.com/AgustinPagliuca/EspacioDermico'
  },
  {
    id: 3,
    title: 'CineCore',
    description: 'Sistema de administración de cine con ASP.NET Core MVC. Incluye CRUD de películas, salas y funciones, reserva visual de butacas, panel de empleados y autenticación con roles mediante ASP.NET Identity.',
    image: '/Portfolio/coming-soon.svg',
    category: 'Backend',
    tech: ['C#', '.NET 10', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap 5'],
    link: '#',
    github: 'https://github.com/AgustinPagliuca/CineCore'
  }
];

export const technologies = {
  frontend: {
    title: 'Frontend',
    color: 'cyan',
    items: ['javascript', 'react', 'astro', 'html5', 'css3', 'tailwind']
  },
  backend: {
    title: 'Backend',
    color: 'purple',
    items: ['api', 'sqlserver', 'csharp', 'dotnet', 'aspnet', 'entityframework']
  },
  tools: {
    title: 'Herramientas',
    color: 'orange',
    items: ['git', 'github', 'jira', 'vscode', 'vstudio', 'postman', 'sqlmanagement']
  }
};

export const menuItems = [
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'sobre-mi', label: 'Sobre mí' }
];
