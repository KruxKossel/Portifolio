import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importação dos ícones de contato
import { useEffect, useRef } from 'react';
import RainEffect from './components/RainEffect'; // Importa o componente RainEffect
import './App.css';
import './components/RainEffect.css'; // Importa os estilos do RainEffect

function App() {
  const location = useLocation();
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' }); // Suaviza a rolagem ao mudar de rota
    }
  }, [location]);

  return (
    <div className="app">
      <nav className="nav"> {/* Navegação */}
        <Link to="/" className="menu-item" state={{ from: location.pathname }}>
          <span className="menu-text">Home</span>
          <span className="menu-icon"><AiOutlineHome size={24} /></span>
        </Link>
        <Link to="/about" className="menu-item" state={{ from: location.pathname }}>
          <span className="menu-text">About</span>
          <span className="menu-icon"><AiOutlineUser size={24} /></span>
        </Link>
        <Link to="/projects" className="menu-item" state={{ from: location.pathname }}>
          <span className="menu-text">Projects</span>
          <span className="menu-icon"><AiOutlineProject size={24} /></span>
        </Link>
      </nav>
      <div className="main-content" ref={mainContentRef}> {/* Conteúdo principal */}
        <div className="content">
          <Routes location={location}> {/* Rotas */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
      <div className="card"> {/* Card de ícones de contato */}
        <a href="https://github.com/KruxKossel" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> {/* Ícone do GitHub */}
        </a>
        <a href="https://www.linkedin.com/in/ellen-oliveira-931a5926b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" /> {/* Ícone do LinkedIn */}
        </a>
        <a href="mailto:ellenprof57@gmail.com">
          <FaEnvelope className="icon" /> {/* Ícone do e-mail */}
        </a>
      </div>
      <RainEffect /> {/* Adiciona o componente RainEffect */}
    </div>
  );
}

export default App;
