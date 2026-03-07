// Portfolio Data - Agustín Pagliuca
// All personal information and content in one place for easy updates

export const personalInfo = {
  name: 'Agustín',
  lastName: 'Pagliuca',
  fullName: 'Agustín Pagliuca',
  title: 'Desarrollador Fullstack',
  subtitle: 'React · Node.js · JavaScript',
  yearsExperience: '+3',
  email: 'agustinpagliuca1@gmail.com',
  phone: '+54-11-23448499',
  location: 'Buenos Aires, Argentina',
  linkedin: 'https://www.linkedin.com/in/agustin-pagliuca-6836b7237/',
  github: 'https://github.com/AgustinPagliuca',
  profileImage: '/portfolio/foto-perfil.jpeg',
  cvUrl: '/portfolio/cv-agustin-pagliuca.pdf',
  available: true
};

export const aboutMe = {
  greeting: 'Hola 👋',
  paragraphs: [
    {
      text: 'soy Agustín Pagliuca, ',
      highlights: [
        { text: 'Estudiante de Analista de Sistemas', type: 'cyan' },
        { text: ' y ', type: 'normal' },
        { text: 'Desarrollador Fullstack con foco en Frontend', type: 'cyan' }
      ],
      suffix: '. Apasionado por la programación desde temprana edad, con experiencia en React, consumo de APIs RESTful, uso de Context API y conocimientos en backend con Node.js y bases de datos SQL.'
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
    period: 'Presente',
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
    description: 'Landing page para centro de estética y bienestar construida con Astro y React. Diseño responsive con Tailwind, integración de APIs y formularios de contacto funcionales.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    category: 'Frontend',
    tech: ['React', 'Tailwind', 'JavaScript'],
    link: 'https://agustinpagliuca.github.io/EspacioDermico/',
    github: 'https://github.com/AgustinPagliuca/EspacioDermico'
  }
];

export const technologies = {
  frontend: {
    title: 'Frontend',
    color: 'cyan',
    items: ['javascript', 'react', 'nextjs', 'html5', 'css3', 'tailwind', 'bootstrap']
  },
  backend: {
    title: 'Backend',
    color: 'purple',
    items: ['nodejs', 'expressjs', 'api', 'sqlserver']
  },
  tools: {
    title: 'Herramientas',
    color: 'orange',
    items: ['git', 'github', 'jira', 'vscode']
  }
};

export const menuItems = [
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'sobre-mi', label: 'Sobre mí' }
];
