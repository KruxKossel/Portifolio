// RainEffect.jsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const RainEffect = () => {
  const rainContainer = useRef(null);

  useEffect(() => {
    const raindrops = rainContainer.current.querySelectorAll('.raindrop');
    raindrops.forEach((drop) => {
      gsap.to(drop, {
        y: window.innerHeight * 1.5, // Ajuste conforme necessário
        repeat: -1,
        yoyo: true,
        ease: 'linear',
        duration: 2 + Math.random(), // Duração aleatória para variar a velocidade
        delay: Math.random() * 2, // Atraso aleatório para variar o início da animação
      });
    });
  }, []);

  return (
    <div ref={rainContainer} className="rain-container">
      {Array.from({ length: 10 }).map((_, colIndex) => (
        <div key={`col-${colIndex}`} className="rain-column">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={`drop-${colIndex}-${index}`} className="raindrop"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RainEffect;
