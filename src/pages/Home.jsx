import { useEffect, useState } from 'react';
import { FaDragon } from 'react-icons/fa';
import '../components/DragonAnimation.css';

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[calc(100vh-120px)] w-full flex flex-col overflow-hidden relative mt-10 pb-20 md:pb-0">
      {/* Container principal com os dois blocos */}
      <div className={`flex-1 flex flex-col md:flex-row w-full h-full transform transition-all duration-1000
                      ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Bloco 1: Conteúdo à esquerda */}
        <div className="flex-1 md:w-1/2 flex flex-col justify-center items-center md:items-start md:pl-[10%] px-4 
                      py-8 md:py-0 relative z-10">
          <div className="w-full flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-gradient font-bold leading-tight mb-3 text-center md:text-left 
                         transform-gpu transition-default">
              Ellen KOS.
            </h1>
            <strong>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[var(--color-text-primary)] mb-4 text-center md:text-left
                          transform-gpu transition-default">
                Desenvolvedora FullStack
              </p>
            </strong>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 max-w-xl">
              {/* Tecnologias Principais */}
              <span className="text-sm md:text-base text-[var(--color-primary)] hover:text-[var(--color-hover)] transition-default hover-lift">React</span>
              <span className="text-sm md:text-base text-[var(--color-primary)] hover:text-[var(--color-hover)] transition-default hover-lift">Next.js</span>
              <span className="text-sm md:text-base text-[var(--color-primary)] hover:text-[var(--color-hover)] transition-default hover-lift">ASP.NET</span>
              <span className="text-sm md:text-base text-[var(--color-primary)] hover:text-[var(--color-hover)] transition-default hover-lift">Node.js</span>
              
              {/* Linguagens */}
              <span className="text-sm md:text-base text-[var(--color-secondary)] hover:text-[var(--color-hover)] transition-default hover-lift">TypeScript</span>
              <span className="text-sm md:text-base text-[var(--color-secondary)] hover:text-[var(--color-hover)] transition-default hover-lift">C#</span>
              <span className="text-sm md:text-base text-[var(--color-secondary)] hover:text-[var(--color-hover)] transition-default hover-lift">Python</span>
              
              {/* Especialidades */}
              <span className="text-sm md:text-base text-[var(--color-accent)] hover:text-[var(--color-hover)] transition-default hover-lift">DevSecOps</span>
              <span className="text-sm md:text-base text-[var(--color-accent)] hover:text-[var(--color-hover)] transition-default hover-lift">OSINT</span>
              
              {/* Ferramentas */}
              <span className="text-sm md:text-base text-[var(--color-text-secondary)] hover:text-[var(--color-hover)] transition-default hover-lift">Docker</span>
              <span className="text-sm md:text-base text-[var(--color-text-secondary)] hover:text-[var(--color-hover)] transition-default hover-lift">PostgreSQL</span>
              <span className="text-sm md:text-base text-[var(--color-text-secondary)] hover:text-[var(--color-hover)] transition-default hover-lift">Firebase</span>
              <span className="text-sm md:text-base text-[var(--color-text-secondary)] hover:text-[var(--color-hover)] transition-default hover-lift">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Bloco 2: Dragão à direita */}
        <div className="flex-1 md:w-1/2 flex justify-center items-center relative z-0 
                      transform-gpu transition-all duration-300 p-4 md:p-8">
          <div className="flex justify-center items-center w-full h-full max-h-[50vh] md:max-h-[60vh]">
            <FaDragon className="glitch-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
