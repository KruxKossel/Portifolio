import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { Z_INDEX } from '../constants/theme';

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-black/20 backdrop-blur-sm text-white flex items-center" style={{ zIndex: Z_INDEX.header }}>
      <nav className="flex gap-8 w-full justify-center md:justify-start md:w-[40%] md:ml-[10%]">
        <Link 
          to="/" 
          className={`group flex items-center gap-2 hover:text-yellow-300 hover:scale-110 transition-all duration-300 
                    ${location.pathname === '/' ? 'text-purple-400' : ''}`}
        >
          <AiOutlineHome className="text-2xl" />
          <span className="text-lg max-md:hidden">Home</span>
        </Link>
        
        <Link 
          to="/about" 
          className={`group flex items-center gap-2 hover:text-yellow-300 hover:scale-110 transition-all duration-300 
                    ${location.pathname === '/about' ? 'text-purple-400' : ''}`}
        >
          <AiOutlineUser className="text-2xl" />
          <span className="text-lg max-md:hidden">About</span>
        </Link>
        
        <Link 
          to="/projects" 
          className={`group flex items-center gap-2 hover:text-yellow-300 hover:scale-110 transition-all duration-300 
                    ${location.pathname === '/projects' ? 'text-purple-400' : ''}`}
        >
          <AiOutlineProject className="text-2xl" />
          <span className="text-lg max-md:hidden">Projects</span>
        </Link>
      </nav>
    </header>
  );
} 