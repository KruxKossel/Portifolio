const getEnvironment = () => {
  try {
    return import.meta.env.MODE || 'development';
  } catch (error) {
    return 'development';
  }
};

export const CONFIG = {
  // Informações pessoais
  name: "Ellen Oliveira",
  email: "ellenprof57@gmail.com",
  github: "https://github.com/KruxKossel",
  linkedin: "https://www.linkedin.com/in/ellen-oliveira-931a5926b/",
  
  // Meta tags
  siteTitle: "Ellen Oliveira - Desenvolvedora Full Stack",
  siteDescription: "Portfólio pessoal de Ellen Oliveira, desenvolvedora full stack com foco em React, Node.js e .NET",
  siteKeywords: "desenvolvedor, full stack, react, node.js, .net, javascript, typescript",
  
  // Configurações de contato
  contactEmail: "ellenprof57@gmail.com",
  
  // Configurações de animação
  animationDuration: 1000,
  transitionDuration: 300,
  
  // Configurações de layout
  maxContentWidth: "1200px",
  headerHeight: "80px",
  footerHeight: "60px",
  
  // Configurações de API
  apiEndpoint: "https://api.portifolio-ellen-kos.netlify.app",
  
  // Configurações de cache
  cacheTimeout: 3600000, // 1 hora em milissegundos
  
  // Configurações de segurança
  maxLoginAttempts: 3,
  sessionTimeout: 3600, // 1 hora em segundos
  
  // Configurações de performance
  imageQuality: 80,
  maxImageSize: 2048, // KB
  
  // Configurações de SEO
  ogImage: "/og-image.jpg",
  twitterHandle: "@ellenoliveira",
  
  // Configurações de desenvolvimento
  isDevelopment: getEnvironment() === 'development',
  isProduction: getEnvironment() === 'production',
  
  // Configurações de feature flags
  features: {
    enableBlog: false,
    enableNewsletter: false,
    enableDarkMode: false
  }
}; 