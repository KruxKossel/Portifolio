import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { Z_INDEX } from '../constants/theme';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 md:p-4"
      style={{ zIndex: Z_INDEX.modal }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
      aria-describedby={`modal-description-${project.id}`}
    >
      <div 
        className="bg-[#1A0B2E] rounded-lg w-full max-w-2xl overflow-hidden 
                   border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[30vh] md:h-[40vh]">
          <img 
            src={project.image} 
            alt={`Screenshot detalhada do projeto ${project.title}`}
            className="w-full h-full object-cover"
          />
          <button 
            className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1.5 
                       hover:bg-white/20 transition-colors"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <MdClose className="text-xl md:text-2xl" />
          </button>
          <div 
            className={`absolute bottom-2 right-2 px-2 md:px-3 py-1 rounded text-xs md:text-sm ${
              project.type === 'autoral' 
                ? 'bg-white text-[#1A0B2E] shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
                : 'bg-[#F0ABFC] text-[#1A0B2E] shadow-[0_0_10px_rgba(240,171,252,0.3)]'
            }`}
            role="status"
          >
            {project.type === 'autoral' ? 'Projeto Autoral' : 'Projeto Colaborativo'}
          </div>
        </div>
        
        <div className="p-4 md:p-6">
          <h2 
            id={`modal-title-${project.id}`}
            className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4"
          >
            {project.title}
          </h2>
          <p 
            id={`modal-description-${project.id}`}
            className="text-sm md:text-base text-white/80 mb-4 md:mb-6"
          >
            {project.fullDescription}
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <span className="text-white font-semibold">Tecnologias:</span>
              <span className="text-[#F0ABFC]">{project.tech}</span>
            </div>
            
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#F0ABFC] transition-colors text-sm md:text-base
                         bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg"
                aria-label={`Acessar repositório do projeto ${project.title} no GitHub`}
              >
                <FaGithub className="text-lg md:text-xl" />
                <span>Repositório</span>
              </a>
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#F0ABFC] transition-colors text-sm md:text-base
                           bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg"
                  aria-label={`Visualizar projeto ${project.title} em funcionamento`}
                >
                  <AiFillEye className="text-lg md:text-xl" />
                  <span>Visualizar</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    repoLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    type: PropTypes.oneOf(['autoral', 'colaborativo']).isRequired
  }),
  onClose: PropTypes.func.isRequired
};

export default ProjectModal; 