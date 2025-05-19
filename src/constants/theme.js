export const COLORS = {
  primary: '#DA70D6', // Rosa principal
  secondary: '#8B00FF', // Roxo secundário
  accent: '#FFD700', // Amarelo para destaques
  background: {
    dark: '#1a1a1a',
    overlay: 'rgba(0, 0, 0, 0.5)',
    glass: 'rgba(0, 0, 0, 0.2)',
    glassStrong: 'rgba(0, 0, 0, 0.4)'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#D1D1D1',
    muted: '#A1A1A1'
  },
  status: {
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFA726'
  }
};

export const GRADIENTS = {
  primary: 'linear-gradient(45deg, #8B00FF, #6A0DAD, #4B0082, #2E0854)',
  dragon: 'linear-gradient(45deg, #FFD700, #D8BFD8, #8B00FF, #6A0DAD)'
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
};

export const TRANSITIONS = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease'
};

export const Z_INDEX = {
  modal: 100,
  crow: 60,
  header: 50,
  footer: 30,
  overlay: 20,
  base: 1
}; 