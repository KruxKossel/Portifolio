import { useEffect, useState } from 'react';
import { FaCubes, FaCode, FaServer, FaShieldAlt } from 'react-icons/fa';
import { CONFIG } from '../config';

const services = [
  {
    id: 'sistemas',
    icon: FaCubes,
    iconColor: '#C084FC',
    title: 'Sistemas Complexos (ERP/CRM/Gamificação)',
    subtitle: '.NET · PHP · Python · React · Angular',
    benefits: [
      'Arquitetura escalável e orientação a negócio',
      'Automação de processos internos',
      'Gamificação e experiências interativas',
    ],
    price: 'Investimento: R$ 120/hora',
  },
  {
    id: 'fullstack',
    icon: FaCode,
    iconColor: '#DA70D6',
    title: 'FullStack com Security by Design',
    subtitle: 'Front ao Back com foco em segurança',
    benefits: [
      'Código limpo e proteção contra vulnerabilidades',
      'Alta performance e escalabilidade',
      'Autenticação segura e APIs robustas',
    ],
    price: 'Investimento: R$ 100/hora',
  },
  {
    id: 'linux',
    icon: FaServer,
    iconColor: '#A78BFA',
    title: 'Infraestrutura e Servidores Linux',
    subtitle: 'Deploy seguro e ambiente otimizado',
    benefits: [
      'Configuração e hardening de servidores',
      'Gerenciamento e monitoramento contínuo',
      'Otimização de infra para aplicações web',
    ],
    price: 'Investimento: R$ 90/hora',
  },
  {
    id: 'devsecops',
    icon: FaShieldAlt,
    iconColor: '#F0ABFC',
    title: 'Consultoria Técnica e Segurança',
    subtitle: 'DevSecOps · OSINT',
    benefits: [
      'Auditoria de código e análise de vulnerabilidades',
      'Segurança integrada ao ciclo de desenvolvimento',
      'Inteligência em fontes abertas (OSINT)',
    ],
    price: 'Valor/hora sob consulta',
  },
];

const Services = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const emailHref = `mailto:${CONFIG.email}?subject=Solicita%C3%A7%C3%A3o%20de%20Or%C3%A7amento&body=Ol%C3%A1%20Ellen%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20os%20seus%20servi%C3%A7os.`;

  return (
    <div className="h-screen w-full flex flex-col relative pt-24 md:pt-28 pb-28 md:pb-28">
      <div className={`flex-1 flex flex-col transform transition-all duration-1000
                      ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Cabeçalho com título e banner */}
        <div className="w-full md:w-[80%] mx-auto mb-2 md:mb-3 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            <span
              style={{
                background: 'linear-gradient(90deg, #8B00FF, #DA70D6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Serviços
            </span>
          </h1>
          <p className="text-xs md:text-base text-[#C084FC] mb-3">
            Consultoria técnica para projetos que exigem qualidade, segurança e performance.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-white/5 border border-purple-500/40 backdrop-blur-sm">
            <span className="text-[#DA70D6] font-semibold text-xs md:text-sm">
              💜 Hora Técnica disponível via contato direto
            </span>
          </div>
        </div>

        {/* Container scrollável — mesmo padrão de Projects */}
        <div className="flex-1 md:w-[80%] mx-auto px-3 md:px-0">
          <div className="h-[calc(100vh-420px)] md:h-[calc(100vh-420px)] bg-[#1A0B2E] rounded-lg p-3 md:p-3
                          overflow-y-auto border border-white/20
                          scrollbar-thin scrollbar-track-[#1A0B2E] scrollbar-thumb-white/20
                          hover:scrollbar-thumb-white/40">

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group relative flex flex-col gap-2 p-3 rounded-xl
                               bg-white/5 backdrop-blur-md
                               border border-purple-500/30
                               hover:border-purple-400/60
                               transition-all duration-300
                               hover:shadow-[0_0_30px_rgba(139,0,255,0.15)]
                               hover:-translate-y-1"
                  >
                    {/* Ícone + título */}
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center
                                      rounded-lg bg-white/10 group-hover:bg-white/15 transition-colors">
                        <Icon size={16} style={{ color: service.iconColor }} />
                      </div>
                      <div>
                        <h2 className="text-xs md:text-sm font-bold text-white leading-tight">
                          {service.title}
                        </h2>
                        <p className="text-[10px] md:text-xs text-[#DA70D6] mt-0.5">{service.subtitle}</p>
                      </div>
                    </div>

                    {/* Divisor */}
                    <div className="h-px bg-gradient-to-r from-purple-500/40 via-pink-400/30 to-transparent" />

                    {/* Benefícios */}
                    <ul className="flex flex-col gap-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[10px] md:text-xs text-white/80">
                          <span className="mt-0.5 flex-shrink-0 w-3 h-3 rounded-full flex items-center justify-center
                                           bg-purple-500/30 text-[#DA70D6] text-[8px] font-bold">
                            ✓
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Preço */}
                    <div className="mt-auto pt-2 border-t border-white/10">
                      <span className="text-[10px] md:text-xs font-semibold text-[#F0ABFC]">
                        {service.price}
                      </span>
                    </div>

                    {/* Overlay hover */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                                 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139,0,255,0.06), rgba(218,112,214,0.06))',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Botão Solicitar Orçamento — fora do scroll, acima do footer */}
        <div className="w-full md:w-[80%] mx-auto px-3 md:px-0 mt-4 flex flex-col items-center gap-2">
          <a
            href={emailHref}
            className="inline-flex items-center gap-2 px-8 py-2.5 rounded-xl font-semibold
                       text-white text-sm transition-all duration-300
                       hover:scale-105 hover:shadow-[0_0_25px_rgba(139,0,255,0.4)]"
            style={{ background: 'linear-gradient(135deg, #8B00FF, #DA70D6)' }}
          >
            ✉ Solicitar Orçamento
          </a>
          <p className="text-white/40 text-[10px] md:text-xs text-center max-w-lg italic mt-1">
            Soluções pensadas para serem seguras desde a primeira linha de código,
            hospedadas em ambientes Linux otimizados.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;

