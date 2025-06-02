import SocialLinks from './SocialLinks';
import { Z_INDEX } from '../constants/theme';

export default function Footer() {
  return (
    <footer 
      className="fixed bottom-0 left-0 right-0 bg-black/10 backdrop-blur-[2px] text-white/80 border-t border-white/5"
      style={{ zIndex: Z_INDEX.footer }}
      role="contentinfo"
      aria-label="Rodapé com links sociais e copyright"
    >
      {/* Container principal com flex column */}
      <div className="flex flex-col items-center py-2.5">
        {/* Redes sociais na parte superior */}
        <div className="mb-2.5">
          <SocialLinks iconSize={20} />
        </div>
        
        {/* Copyright e créditos na parte inferior */}
        <div className="flex items-center gap-3 text-center">
          <span className="text-xs text-white/60">© 2025</span>
          <span className="text-white/60 text-[10px]">•</span>
          <a 
            href="https://github.com/KruxKossel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-purple-300/40 hover:text-purple-300/80 transition-all hover:tracking-wide"
            aria-label="Design por Ellen Oliveira"
          >
            Design by Ellen Oliveira
          </a>
        </div>
      </div>
    </footer>
  );
} 