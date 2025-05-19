import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { CONFIG } from '../config';

const SocialLinks = ({ iconSize = 24, className = '' }) => {
  const links = [
    {
      href: CONFIG.github,
      icon: FaGithub,
      label: "GitHub"
    },
    {
      href: CONFIG.linkedin,
      icon: FaLinkedin,
      label: "LinkedIn"
    },
    {
      href: `mailto:${CONFIG.email}`,
      icon: FaEnvelope,
      label: "Email"
    }
  ];

  return (
    <div className={`flex gap-5 ${className}`}>
      {links.map(({ href, icon: Icon, label }) => (
        <a 
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 transition-colors"
          aria-label={`Acessar ${label}`}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  iconSize: PropTypes.number,
  className: PropTypes.string
};

export default SocialLinks; 