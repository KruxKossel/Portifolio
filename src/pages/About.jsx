import { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaCrow, FaPython, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";
import { DiSqllite, DiDotnet } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiC, SiLua, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { gsap } from 'gsap';
import { MdKeyboardArrowRight, MdOutlineWorkHistory, MdSchool, MdCode, MdPersonOutline, MdOutlineAutoStories, MdClose } from "react-icons/md";
import { Z_INDEX } from '../constants/theme';
import { BsLightbulb } from "react-icons/bs";

const About = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    // Animação para o corvo
    const crowAnimation = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    crowAnimation.to('.crow-icon', { scaleX: -1, duration: 0.5, ease: 'power1.inOut' });
    for (let i = 1; i <= 20; i++) {
      crowAnimation.to('.crow-icon', { x: -i * 10, y: (i % 2 === 0 ? -5 : 0), duration: 0.3, ease: 'power1.inOut' });
    }
    crowAnimation.to('.crow-icon', { duration: 0.5 });
    crowAnimation.to('.crow-icon', { scaleX: 1, duration: 0.5, ease: 'power1.inOut' });
    for (let i = 19; i >= 0; i--) {
      crowAnimation.to('.crow-icon', { x: -i * 10, y: (i % 2 === 0 ? -5 : 0), duration: 0.3, ease: 'power1.inOut' });
    }
    crowAnimation.to('.crow-icon', { duration: 0.5 });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const topics = [
    {
      id: 'intro',
      title: 'Sobre Mim',
      icon: <MdPersonOutline className="text-2xl" />,
      content: `Olá! Meu nome é Ellen Oliveira, e minha história com tecnologia começou na infância, com meus primeiros cursos de informática e design de jogos. Essa experiência inicial plantou a semente do que viria a ser minha paixão profissional.

Em 2023, decidi seguir minha afinidade natural com tecnologia e iniciei o curso de Análise e Desenvolvimento de Sistemas. Mesmo sem experiência prévia em programação, minha dedicação e facilidade com lógica me permitiram aprender rapidamente. Logo percebi que desenvolver softwares e planejar projetos era exatamente o que me fazia sentir realizada.

Hoje, além de atuar como desenvolvedora Full-stack, estou cursando Segurança da Informação. Sou uma pessoa criativa e analítica, que adora desafios e está sempre em busca de aprendizado. Para mim, cada projeto é uma oportunidade de criar soluções inovadoras e bem estruturadas, combinando organização com criatividade.`
    },
    {
      id: 'education',
      title: 'Formação',
      icon: <MdSchool className="text-2xl" />,
      content: `Base Sólida - UNIP (2023-2025):

• Análise e desenvolvimento de sistemas completos
• Metodologias ágeis e gestão de projetos
• Arquitetura de software e padrões de projeto
• Fundamentos sólidos em programação e lógica

Especialização - Fatec Araraquara (2025-2028):

• Segurança da Informação com foco prático
• Desenvolvimento seguro com diversas tecnologias
• Análise de vulnerabilidades e proteção de dados
• Segurança em sistemas e redes`
    },
    {
      id: 'experience',
      title: 'Experiência Técnica',
      icon: <MdCode className="text-2xl" />,
      content: `Desenvolvimento Web:

• Frontend: React, TypeScript, Tailwind CSS
• Backend: C#/.NET, Node.js, Python
• Bancos de dados: PostgreSQL, MongoDB
• DevOps: Docker, Git, CI/CD

Projetos Destacados:

• ERP para Fazenda Urbana em C# - Sistema completo com gestão de cultivo, colheita e vendas
• Aplicações web com autenticação segura e proteção contra vulnerabilidades comuns
• Jogos educativos em Lua/Roblox focados em lógica de programação
• Contribuições em projetos open source de segurança`
    },
    {
      id: 'learning',
      title: 'Aprendizado Atual',
      icon: <MdOutlineAutoStories className="text-2xl" />,
      content: `Segurança Ofensiva:

• Técnicas avançadas de pentesting
• Análise de malware e engenharia reversa
• Exploração de vulnerabilidades web

DevSecOps:

• Integração de SAST e DAST em pipelines CI/CD
• Containerização segura com Docker
• Gestão de segredos e configurações sensíveis

OSINT e Análise:

• Técnicas avançadas de coleta de informações
• Análise de ameaças cibernéticas
• Ferramentas e metodologias de investigação digital`
    },
    {
      id: 'skills',
      title: 'Soft Skills',
      icon: <BsLightbulb className="text-2xl" />,
      content: `Liderança e Colaboração:

• Coordenação de projetos em equipes multidisciplinares
• Mentoria técnica para desenvolvedores iniciantes
• Participação ativa em comunidades de desenvolvimento

Metodologia e Organização:

• Documentação técnica clara e abrangente
• Práticas de código limpo e revisão de código
• Gestão eficiente de tempo e prioridades

Resolução de Problemas:

• Análise sistemática de vulnerabilidades
• Pensamento crítico na arquitetura de soluções
• Adaptabilidade a novas tecnologias e desafios`
    },
    {
      id: 'future',
      title: 'Objetivos Futuros',
      icon: <MdOutlineWorkHistory className="text-2xl" />,
      content: `Minha jornada na tecnologia está apenas começando, e tenho muitos planos pela frente! Quero me aprofundar cada vez mais em desenvolvimento seguro e cibersegurança, áreas que me fascinam pela complexidade e importância no mundo atual.

Em busca constante de expandir meus conhecimentos em desenvolvimento web e práticas de segurança. Acredito que a combinação dessas duas áreas é fundamental para criar soluções realmente robustas e confiáveis. Meu objetivo é crescer como profissional sem perder a curiosidade e o entusiasmo de aprender coisas novas.

No curto prazo, estou focada em aplicar meus conhecimentos em projetos desafiadores, sempre buscando criar soluções organizadas e inovadoras. Quero fazer parte de equipes onde possa tanto contribuir quanto aprender, pois acredito que o crescimento profissional acontece quando compartilhamos experiências e conhecimentos.`
    }
  ];

  return (
    <div className="h-[calc(100vh-120px)] w-full flex flex-col overflow-hidden relative mt-16 md:mt-20 pb-10 md:pb-20">      {/* Container principal sem scroll */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className={`w-full px-4 md:px-[10%] transform transition-all duration-1000
                      ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Corvo para todas as telas */}
          <div className="w-full flex justify-end mb-2 md:mb-3" style={{ zIndex: Z_INDEX.crow }}>
            <FaCrow className="crow-icon text-2xl md:text-3xl text-black hover:text-gray-800 transition-colors" />
          </div>

          {/* Cabeçalho */}
          <div className="mb-2 md:mb-4">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-0.5 md:mb-1.5">Olá!</h2>
            <h3 className="text-base md:text-2xl text-[#C084FC]">
              Descubra um pouco sobre minha jornada
            </h3>
          </div>

          {/* Grid de tópicos - visível em todas as telas */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className="bg-[#2C1250] rounded-lg p-2 md:p-3 text-left h-[40px] md:h-[50px]
                         hover:bg-[#3B1B6B] transition-all duration-300 hover:scale-[1.02]
                         border-2 border-black/50 hover:border-white/50 group 
                         shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                         flex items-center"
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="text-white group-hover:text-[#F0ABFC] transition-colors">
                    {topic.icon}
                  </div>
                  <h4 className="text-[10px] md:text-sm font-semibold text-[#F0ABFC] group-hover:text-white transition-colors">
                    {topic.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Seção de Tecnologias */}
          <div className="mt-1 md:mt-4 flex-shrink-0">
            <h3 className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-3">Tecnologias</h3>
            <div className="relative">
              <div className="tech-scroll overflow-x-auto pb-1 md:pb-6 scrollbar-thin scrollbar-track-[#1A0B2E] scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40">
                <div className="flex gap-2 md:gap-8 items-center min-w-max px-1 md:px-2 pb-1 md:pb-2">
                  <RiJavascriptFill className="text-lg md:text-4xl text-yellow-300 hover:text-yellow-200 transition-colors" />
                  <FaReact className="text-lg md:text-4xl text-cyan-400 hover:text-cyan-300 transition-colors" />
                  <FaHtml5 className="text-lg md:text-4xl text-orange-500 hover:text-orange-400 transition-colors" />
                  <FaCss3Alt className="text-lg md:text-4xl text-blue-500 hover:text-blue-400 transition-colors" />
                  <PiFileCSharpDuotone className="text-lg md:text-4xl text-purple-500 hover:text-purple-400 transition-colors" />
                  <DiDotnet className="text-lg md:text-4xl text-white hover:text-[#F0ABFC] transition-colors" />
                  <FaJava className="text-lg md:text-4xl text-red-500 hover:text-red-400 transition-colors" />
                  <SiC className="text-lg md:text-4xl text-blue-400 hover:text-blue-300 transition-colors" />
                  <SiLua className="text-lg md:text-4xl text-blue-300 hover:text-blue-200 transition-colors" />
                  <IoLogoFirebase className="text-lg md:text-4xl text-yellow-500 hover:text-yellow-400 transition-colors" />
                  <DiSqllite className="text-lg md:text-4xl text-blue-600 hover:text-blue-500 transition-colors" />
                  <SiPostgresql className="text-lg md:text-4xl text-blue-400 hover:text-blue-300 transition-colors" />
                  <FaPython className="text-lg md:text-4xl text-yellow-400 hover:text-yellow-300 transition-colors" />
                  <SiTailwindcss className="text-lg md:text-4xl text-cyan-500 hover:text-cyan-400 transition-colors" />
                  <SiTypescript className="text-lg md:text-4xl text-blue-500 hover:text-blue-400 transition-colors" />
                  <FaGitAlt className="text-lg md:text-4xl text-orange-600 hover:text-orange-500 transition-colors" />
                  <FaGithub className="text-lg md:text-4xl text-white hover:text-[#F0ABFC] transition-colors" />
                  <FaDocker className="text-lg md:text-4xl text-blue-500 hover:text-blue-400 transition-colors" />
                  <TbBrandVscode className="text-lg md:text-4xl text-blue-600 hover:text-blue-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal ajustado para mobile */}
      {selectedTopic && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 md:p-4 z-50"
          onClick={() => setSelectedTopic(null)}
        >
          <div
            className="bg-[#1A0B2E] rounded-lg w-full max-w-2xl max-h-[90vh] md:max-h-[80vh] overflow-hidden
                     border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.1)]
                     transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-2rem)] md:max-h-[calc(80vh-2rem)]">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="text-white">
                    {selectedTopic.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {selectedTopic.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <MdClose className="text-xl md:text-2xl" />
                </button>
              </div>
              <div className="text-white space-y-4 text-sm md:text-base whitespace-pre-line">
                {selectedTopic.content.split('\n').map((paragraph, index) => (
                  <p key={index} className={`${paragraph.trim().startsWith('•') ? 'pl-4 text-[#F0ABFC]' : ''}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
