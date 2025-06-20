import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="project-card flex-shrink-0 w-[clamp(230px,25vw,350px)] bg-[#2C1250] rounded-lg overflow-hidden 
                transition-all duration-300 border border-white/20
                flex flex-col cursor-pointer transform-gpu hover:scale-[1.02]
                shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      aria-label={`Projeto ${project.title}: ${project.shortDescription}`}
    >
      <div className="relative h-[clamp(120px,15vw,200px)] overflow-hidden">
        <img 
          src={project.image} 
          alt={`Screenshot do projeto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div 
          className={`absolute top-2 right-2 px-2 py-1 rounded text-[10px] md:text-xs ${
            project.type === 'autoral' 
              ? 'bg-white text-[#1A0B2E] shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
              : 'bg-[#F0ABFC] text-[#1A0B2E] shadow-[0_0_10px_rgba(240,171,252,0.3)]'
          }`}
          role="status"
          aria-label={`Tipo do projeto: ${project.type === 'autoral' ? 'Autoral' : 'Colaborativo'}`}
        >
          {project.type === 'autoral' ? 'Autoral' : 'Colaborativo'}
        </div>
      </div>
      
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-xs md:text-sm text-white/80 flex-grow line-clamp-2">{project.shortDescription}</p>
        <div className="mt-2 md:mt-3">
          <div className="text-[10px] md:text-xs text-[#F0ABFC]">{project.tech}</div>
          <div className="flex gap-3 mt-2">
            {project.repoLink && (
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-white hover:text-[#F0ABFC] transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ver repositório do projeto ${project.title} no GitHub`}
              >
                <FaGithub />
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-white hover:text-[#F0ABFC] transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visualizar projeto ${project.title} ao vivo`}
              >
                <AiFillEye />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    repoLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    type: PropTypes.oneOf(['autoral', 'colaborativo']).isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProjectCard; 