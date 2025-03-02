import { useEffect, useState } from 'react';
import { FaDragon } from 'react-icons/fa';
import './Home.css'; // Importação do arquivo CSS específico para a página Home

const Home = () => {
  const [showIcon, setShowIcon] = useState(false); // Hook de estado para controlar a exibição do ícone

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(true); // Atualiza o estado para mostrar o ícone após 1 segundo
    }, 1000); // Atraso de 1 segundo para mostrar o ícone após o texto aparecer

    return () => clearTimeout(timer); // Limpeza do timer quando o componente é desmontado
  }, []);

  return (
    <div className="page home"> {/* Contêiner principal da página */}
      <div className="left"> {/* Seção esquerda com informações pessoais */}
        <h1>Ellen KOS.</h1>
        <strong><p className="light-paragraph">Desenvolvedora FullStack</p></strong>
        <p className="dark-paragraph">.Net | ReactJs | Flutter | SQL | Python | Lua | Segurança da Informação</p>
      </div>
      <div className="right"> {/* Seção direita para o ícone */}
        <div className={`icon-container ${showIcon ? 'fade-in' : 'hidden'}`}> {/* Classe CSS condicional para animação */}
          <FaDragon className="glitch-icon move" /> {/* Ícone do dragão com a animação de movimento lateral */}
        </div>
      </div>
    </div>
  );
};

export default Home;
