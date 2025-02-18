import { useEffect } from 'react';
import './Projects.css';
import plantechImage from '../assets/plantech.jpg';
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const Projects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.project-card');
    elements.forEach((element) => {
      element.classList.add('slide-up');
    });
  }, []);

  const projects = [
    {
      id: 1,
      image: plantechImage,
      title: "Plantech",
      repoLink: "https://github.com/KruxKossel/Plantech",
      liveLink: ""
    },
    // Adicione outros projetos aqui
  ];

  return (
    <div className="page projects">
      <h1 className="projects-title">Meus Projetos</h1>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card slide-up">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
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
    </div>
  );
};

export default Projects;
