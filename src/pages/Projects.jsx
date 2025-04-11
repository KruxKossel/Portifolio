import { useEffect, useState } from 'react';
import './Projects.css';
import plantechImage from '../assets/plantech.jpg';
import portfolioImage from '../assets/portfolioImage.png';
import luaSBImage from '../assets/luaSB.png';
import mastersofpwnageImage from '../assets/mastersofpwnage.png'; // Ajuste o caminho se necessário
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md'; // Importa a seta

const Projects = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll('.project-card');
    elements.forEach((element) => {
      element.classList.add('slide-up');
    });

    const handleScroll = () => {
      setShowHint(false);
    };

    const container = document.querySelector('.projects-container');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      image: portfolioImage,
      title: "Portfólio",
      repoLink: "https://github.com/KruxKossel/Portifolio",
      liveLink: "https://portifolio-ellen-kos.netlify.app/"
    },
    {
      id: 2,
      image: plantechImage,
      title: "Plantech",
      repoLink: "https://github.com/KruxKossel/Plantech",
      liveLink: ""
    },
    {
      id: 3,
      image: luaSBImage,
      title: "Simulador de Batalhas",
      repoLink: "https://github.com/KruxKossel/Simulador-de-batalhas",
      liveLink: ""
    },
    {
      id: 4,
      image: mastersofpwnageImage, 
      title: "Masters of Pwnage Playable",
      repoLink: "https://github.com/Masters-Of-Pwnage/mop-playable",
      liveLink: "https://masters-of-pwnage.github.io/mop-playable/"
    }
    // Adicione outros projetos aqui
  ];

  return (
    <div className="page projects">
      <h1 className="projects-title">Meus Projetos</h1>
      {showHint && (
        <div className="hint">
          Arraste para o lado <MdKeyboardArrowRight className="arrow" />
        </div>
      )}
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card slide-up">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="project-icon" />
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <AiFillEye className="project-icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Futuramente, os projetos serão separados por área */}
    </div>
  );
};

export default Projects;
