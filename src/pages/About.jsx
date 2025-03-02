import { useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaCrow, FaPython } from "react-icons/fa";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";
import { DiSqllite } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiC, SiLua } from "react-icons/si";
import { gsap } from 'gsap';
import './About.css';

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.about-content');
    elements.forEach((element) => {
      element.classList.add('slide-up');
    });

    // Animação para o corvo
    const crowAnimation = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Virar para a esquerda e parar
    crowAnimation.to('.crow-icon', { scaleX: -1, duration: 0.5, ease: 'power1.inOut' });

    // 20 pulos para a esquerda
    for (let i = 1; i <= 20; i++) {
      crowAnimation.to('.crow-icon', { x: -i * 20, y: (i % 2 === 0 ? -10 : 0), duration: 0.3, ease: 'power1.inOut' });
    }

    // Parar
    crowAnimation.to('.crow-icon', { duration: 0.5 });

    // Virar para a direita e parar
    crowAnimation.to('.crow-icon', { scaleX: 1, duration: 0.5, ease: 'power1.inOut' });

    // 20 pulos para a direita
    for (let i = 19; i >= 0; i--) {
      crowAnimation.to('.crow-icon', { x: -i * 20, y: (i % 2 === 0 ? -10 : 0), duration: 0.3, ease: 'power1.inOut' });
    }

    // Parar antes de recomeçar
    crowAnimation.to('.crow-icon', { duration: 0.5 });

  }, []);

  return (
    <div className="about-container">
      <div className="crow-container"> {/* Container para o corvo */}
        <FaCrow className="crow-icon" />
      </div>
      <div className="about-col">
        <h2>Olá!</h2>
        <h3>Meu nome é <strong>Ellen</strong></h3>
        <div className="about-content">
          <p>
            Eu sempre tive interesse na área de TI. Quando eu era mais nova, ainda criança, fiz cursos de informática e um de design de jogos. Eram coisas bem básicas, mas eu, como uma criança que tinha muito contato com jogos e computador, via isso com fascínio e curiosidade. 
          </p>
          <p>
            Eu me considero uma pessoa criativa, que gosta de explorar e desenvolver coisas. Na minha adolescência, cogitei seguir outras áreas, mas com a pandemia acabei não iniciando nada e foquei em um empreendimento que comecei com a minha família. Com a volta da normalidade, voltei a pensar nos estudos e em uma carreira que eu tivesse afinidade. A tecnologia sempre esteve presente na minha vida, então decidi cursar <span className="highlight">Análise e Desenvolvimento de Sistemas</span> em 2023.
          </p>
          <p>
            Considero um curso muito bom para entrar na área, apesar de eu não saber nada de programação antes. Aprendi muito rápido e gostei muito de tudo que aprendi no curso. Apaixonei-me ainda mais pela tecnologia. Gosto muito de desenvolver softwares e também da parte de planejamento. Escolhi seguir esta carreira por me sentir bem dentro desse universo vasto.
          </p>
          <p>
            Iniciei um novo curso na área de <span className="highlight">Segurança da Informação</span> em 2025, pois planejo seguir carreira em cibersegurança, mas ser uma desenvolvedora de software também é uma opção. 
            Me considero muito boa em lógica de programação. A linguagem que mais tenho familiaridade é <span className="highlight">C#</span> e seu framework, pois trabalhei muito com ela durante meu curso. Entendo de <span className="highlight">CSS</span> e <span className="highlight">HTML</span>, conheço <span className="highlight">C</span>, <span className="highlight">Java</span>, <span className="highlight">JavaScript</span>, <span className="highlight">python</span> e considero que consigo aprender rapidamente qualquer linguagem, já que a maior diferença entre elas é a sintaxe.
          </p>
          <p>
            Além disso, também conheço <span className="highlight">Lua</span> e sua extensão <span className="highlight">Luau</span>, que utilizo para desenvolver jogos no Roblox, mais como um hobby. Para ser um bom desenvolvedor, acredito que é necessário ter curiosidade, vontade de continuar aprendendo e estudando, não ter medo de perguntar, experimentar e conhecer diferentes bibliotecas e APIs, além de buscar evoluir. É importante ser organizado, fazer um código modular, limpo e bem documentado. Essas são qualidades que criam um bom desenvolvedor.
          </p>
          <strong>
            <span>
              Sinta-se à vontade para me chamar para conversar e espero que goste do meu portfólio!
            </span>
          </strong>
        </div>
        <hr /> {/* Linha para separar as seções */}
        <div className="about-skills">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <RiJavascriptFill className="about-icon-size kali-color" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <FaReact className="about-icon-size kali-color" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
            <FaHtml5 className="about-icon-size kali-color" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
            <FaCss3Alt className="about-icon-size kali-color" />
          </a>
          <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
            <PiFileCSharpDuotone className="about-icon-size kali-color" />
          </a>
          <a href="https://docs.oracle.com/javase/8/docs/" target="_blank" rel="noopener noreferrer">
            <FaJava className="about-icon-size kali-color" />
          </a>
          <a href="https://en.cppreference.com/w/" target="_blank" rel="noopener noreferrer">
            <SiC className="about-icon-size kali-color" />
          </a>
          <a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer">
            <SiLua className="about-icon-size kali-color" />
          </a>
          <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer">
            <IoLogoFirebase className="about-icon-size kali-color" />
          </a>
          <a href="https://www.sqlite.org/docs.html" target="_blank" rel="noopener noreferrer">
            <DiSqllite className="about-icon-size kali-color" />
          </a>
          <a href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer">
            <FaPython className="about-icon-size kali-color" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
