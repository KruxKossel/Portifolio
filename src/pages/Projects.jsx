import { useEffect, useState } from 'react';
import plantechImage from '../assets/plantech.jpg';
import portfolioImage from '../assets/portfolioImage.png';
import luaSBImage from '../assets/luaSB.png';
import mastersofpwnageImage from '../assets/mastersofpwnage.png';
import donoDoPedacoImage from '../assets/donoDoPedaco.png';
import mreSolucoes from '../assets/mreSolucoes.png';
import scrySyncHome from '../assets/ScrySyncHome.png';

import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [showContent, setShowContent] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [filter, setFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    const handleScroll = () => {
      setShowHint(false);
    };

    const container = document.querySelector('.projects-scroll');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('touchmove', handleScroll);
    }

    return () => {
      clearTimeout(timer);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('touchmove', handleScroll);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      image: portfolioImage,
      title: "Portfólio",
      shortDescription: "Portfólio pessoal desenvolvido com React e Tailwind CSS.",
      fullDescription: "Portfólio pessoal desenvolvido por mim utilizando React e Tailwind CSS, apresentando projetos e habilidades de forma interativa.",
      tech: "React, Tailwind CSS, GSAP",
      repoLink: "https://github.com/KruxKossel/Portifolio",
      liveLink: "https://portifolio-ellen-kos.netlify.app/",
      type: "autoral"
    },
    {
      id: 2,
      image: donoDoPedacoImage,
      title: "Dono do Pedaço",
      shortDescription: "Site para padaria local com cardápio digital e sistema de encomendas.",
      fullDescription: "Site desenvolvido por mim para uma padaria local com cardápio digital e sistema de encomendas, utilizando Next.js e Tailwind CSS.",
      tech: "Next.js, TypeScript, Tailwind CSS, Shadcn/ui",
      repoLink: "https://github.com/KruxKossel/donoDoPedaco",
      liveLink: "https://dono-do-pedaco.vercel.app/",
      type: "autoral"
    },
    {
      id: 3,
      image: plantechImage,
      title: "Plantech",
      shortDescription: "Sistema de gerenciamento de fazendas urbanas com múltiplos níveis de acesso.",
      fullDescription: "Sistema de gerenciamento de fazendas urbanas desenvolvido como TCC. Permite controle de atividades agrícolas com diferentes níveis de acesso para administração, compras, agricultura e vendas.",
      tech: "C#, .NET, SQLite",
      repoLink: "https://github.com/KruxKossel/Plantech",
      liveLink: "",
      type: "colaborativo"
    },
    {
      id: 4,
      image: luaSBImage,
      title: "Simulador de Batalhas",
      shortDescription: "Simulador de batalhas em turnos desenvolvido em Lua.",
      fullDescription: "Simulador de batalhas desenvolvido por mim em Lua, implementando um sistema de combate por turnos com diferentes classes de personagens.",
      tech: "Lua, Console",
      repoLink: "https://github.com/KruxKossel/Simulador-de-batalhas",
      liveLink: "",
      type: "autoral"
    },
    {
      id: 5,
      image: mreSolucoes,
      title: "MRE Soluções",
      shortDescription: "Site de uma empresa de soluções digitais.",
      fullDescription: "Projeto colaborativo de desenvolvimento do site institucional da MRE Soluções, uma empresa especializada em serviços digitais. O site apresenta a empresa, seus serviços, formas de contato e identidade visual moderna, com foco em responsividade e performance.",
      tech: "React, Next.js, Tailwind CSS, Vercel",
      repoLink: "https://github.com/rafahthomaz14/MRE_Solucoes",
      liveLink: "https://mresolucoes.vercel.app/",
      type: "colaborativo"
    },
    {
      id: 6,
      image: mastersofpwnageImage,
      title: "Masters of Pwnage",
      shortDescription: "Jogo de cartas inspirado em Magic com temática de cibersegurança.",
      fullDescription: "Jogo de cartas open source inspirado em Magic, com temática de cibersegurança. Projeto colaborativo onde atuo como desenvolvedora contribuidora.",
      tech: "HTML, CSS, JavaScript",
      repoLink: "https://github.com/Masters-Of-Pwnage/mop-playable",
      liveLink: "https://masters-of-pwnage.github.io/mop-playable/",
      type: "colaborativo"
    },
    {
      id: 7,
      image: scrySyncHome,
      title: "ScrySync OSINT",
      shortDescription: "Plataforma de Capture The Flag (CTF) focada em OSINT.",
      fullDescription: "ScrySync OSINT é uma plataforma de Capture The Flag (CTF) desenvolvida para desafios de Open Source Intelligence (OSINT). O sistema oferece um ambiente dinâmico para entusiastas de cibersegurança testarem suas habilidades de investigação, ao mesmo tempo em que garante a integridade da competição através de funcionalidades avançadas de backend e IA.",
      tech: "React.ts, Supabase, Python (Backend), Flask, Docker, Azure App Service, PyJWT, Lucide React (Icons), Tailwind CSS.",
      repoLink: "",
      liveLink: "https://scrysync.vercel.app",
      type: "autoral"
    }
  ];

  const filteredProjects = filter === 'todos'
    ? projects
    : projects.filter(project => project.type === filter);

  return (
    <div className="h-screen w-full flex flex-col relative pt-24 md:pt-28 pb-28 md:pb-28">
      <div className={`flex-1 flex flex-col transform transition-all duration-1000
                    ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Cabeçalho com título e filtros */}
        <div className="w-full md:w-[80%] mx-auto mb-3 md:mb-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-white">
            Meus Projetos
          </h1>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4" role="tablist">
            <button
              onClick={() => setFilter('todos')}
              className={`px-3 md:px-6 py-1.5 md:py-2 rounded-lg transition-all duration-300 text-xs md:text-base ${filter === 'todos'
                  ? 'bg-white text-[#1A0B2E] shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-[#1A0B2E] text-white hover:bg-[#3B1B6B] border border-white/20'
                }`}
              role="tab"
              aria-selected={filter === 'todos'}
              aria-controls="todos-projects"
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('autoral')}
              className={`px-3 md:px-6 py-1.5 md:py-2 rounded-lg transition-all duration-300 text-xs md:text-base ${filter === 'autoral'
                  ? 'bg-white text-[#1A0B2E] shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-[#1A0B2E] text-white hover:bg-[#3B1B6B] border border-white/20'
                }`}
              role="tab"
              aria-selected={filter === 'autoral'}
              aria-controls="autoral-projects"
            >
              Autorais
            </button>
            <button
              onClick={() => setFilter('colaborativo')}
              className={`px-3 md:px-6 py-1.5 md:py-2 rounded-lg transition-all duration-300 text-xs md:text-base ${filter === 'colaborativo'
                  ? 'bg-white text-[#1A0B2E] shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-[#1A0B2E] text-white hover:bg-[#3B1B6B] border border-white/20'
                }`}
              role="tab"
              aria-selected={filter === 'colaborativo'}
              aria-controls="collaborative-projects"
            >
              Colaborativos
            </button>
          </div>
        </div>

        {/* Container dos Projetos - Caixa com altura fixa */}
        <div className="flex-1 md:w-[80%] mx-auto px-3 md:px-0">
          <div className="h-[calc(100vh-300px)] md:h-[calc(100vh-310px)] bg-[#1A0B2E] rounded-lg p-3 md:p-4
                        overflow-y-auto border border-white/20
                        scrollbar-thin scrollbar-track-[#1A0B2E] scrollbar-thumb-white/20 
                        hover:scrollbar-thumb-white/40">
            <div
              className="flex flex-wrap gap-3 md:gap-6 justify-center"
              role="tabpanel"
              id={`${filter}-projects`}
              aria-label={`Lista de projetos ${filter === 'todos' ? 'todos' : filter === 'autoral' ? 'autorais' : 'colaborativos'}`}
            >
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
