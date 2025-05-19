import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { useEffect, useRef } from 'react';
import RainEffect from './components/RainEffect';
import Layout from './components/Layout';
import SocialLinks from './components/SocialLinks';
import { Z_INDEX } from './constants/theme';
import './components/RainEffect.css';

function App() {
  const location = useLocation();
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Layout useFlexibleGrid={location.pathname === '/projects'}>
      <div className="relative min-h-full w-full">
        <div className="main-content h-full overflow-y-auto" ref={mainContentRef}>
          <div className="content">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>

        {/* Card de redes sociais - apenas versão desktop */}
        <div 
          className="hidden md:flex fixed top-24 right-6"
          style={{ zIndex: Z_INDEX.overlay }}
        >
          <div className="flex flex-col gap-5 bg-purple-500/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <SocialLinks iconSize={28} />
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <RainEffect />
        </div>
      </div>
    </Layout>
  );
}

export default App;
