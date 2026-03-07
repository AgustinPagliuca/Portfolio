import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const AboutSection = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Initialize from localStorage
    const savedDarkMode = localStorage.getItem('darkMode') !== 'false';
    setDarkMode(savedDarkMode);

    // Listen for dark mode changes
    const handleDarkModeChange = (e) => {
      setDarkMode(e.detail.darkMode);
    };
    window.addEventListener('darkModeChange', handleDarkModeChange);

    return () => {
      window.removeEventListener('darkModeChange', handleDarkModeChange);
    };
  }, []);
  const downloadCv = async (e) => {
    e.preventDefault();
    try {
      const url = personalInfo.cvUrl;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'cv-agustin-pagliuca.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      window.location.href = personalInfo.cvUrl;
    }
  };

  return (
    <section id="sobre-mi" className={`py-20 px-6 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Sobre mí
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className={`w-48 h-48 rounded-full overflow-hidden border-4 shadow-xl relative ${
              darkMode ? 'border-gray-700' : 'border-gray-300'
            }`}>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20 pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Hola 👋</span>, soy Agustín Pagliuca,{' '}
              <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Estudiante de Analista de Sistemas</span> y{' '}
              <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>Desarrollador Fullstack con foco en Frontend</span>. Apasionado por la
              programación desde temprana edad, con experiencia en React, consumo de APIs RESTful y conocimientos en backend con Node.js y SQL.
            </p>

            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Entre mis fortalezas destaco el{' '}
              <span className={`font-medium ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                desarrollo de interfaces web responsivas
              </span>
              , implementación de componentes reutilizables, manejo de estado con Context API y optimización de rendimiento en aplicaciones React.
            </p>

            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Me motiva trabajar en{' '}
              <span className={`underline underline-offset-4 ${
                darkMode ? 'decoration-cyan-400/50' : 'decoration-cyan-600/50'
              }`}>
                equipos colaborativos
              </span>{' '}
              y aportar soluciones escalables. Tengo experiencia con metodologías ágiles (Scrum) y herramientas como Jira.
            </p>

            <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Por último, comparto mi hoja de vida actualizada, donde de manera más detallada
              especifico mi experiencia, logros y formación académica.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={downloadCv}
                className={`inline-flex items-center gap-2 px-6 py-3 border rounded-full text-sm transition-all ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                Currículum
                <Download size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
