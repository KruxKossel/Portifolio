import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { MdClose } from 'react-icons/md';

const FLAG = 'FLAG{CORVO_LINUX_EXPERT}';

const BOOT_LINES = [
  '> KOS-Terminal v1.3.37 — inicializando...',
  '> Sistema carregado. Bem-vinda, usuária.',
  '> Digite "help" para listar os comandos disponíveis.',
  '',
];

const HELP_TEXT = [
  '  help        — lista os comandos',
  '  ls [-a]     — lista os arquivos do diretório atual',
  '  cd <pasta>  — navega para uma pasta',
  '  cd ..       — volta ao diretório anterior',
  '  cat <arq>   — lê um arquivo',
  '  clear       — limpa o terminal',
];

// arquivos visíveis (sem -a)
const FILES_VISIBLE = {
  '~': ['sobre_mim.txt'],
  '~/.secret': ['flag.txt', 'notas.md'],
};

// arquivos com ls -a (inclui ocultos)
const FILES_ALL = {
  '~': ['sobre_mim.txt', '.secret/'],
  '~/.secret': ['flag.txt', 'notas.md'],
};

const FILE_CONTENTS = {
  '~/sobre_mim.txt':
    'Ellen Oliveira — FullStack Developer & Security Enthusiast.\nCuriosidade é o meu principal vetor de ataque.',
  '~/.secret/notas.md':
    '# notas privadas\nse você chegou até aqui, está no caminho certo...',
  '~/.secret/flag.txt': FLAG,
};

export default function CrowTerminal({ onClose }) {
  const [history, setHistory] = useState([...BOOT_LINES]);
  const [input, setInput] = useState('');
  const [cwd, setCwd] = useState('~');
  const [won, setWon] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const overlayRef = useRef(null);
  const winRef = useRef(null);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
    );
  }, []);

  // Win animation
  useEffect(() => {
    if (!won) return;
    gsap.fromTo(
      winRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [won, onClose]);

  const print = (...lines) =>
    setHistory((h) => [...h, ...lines]);

  const handleCommand = (raw) => {
    const cmd = raw.trim();
    print(`${cwd} $ ${cmd}`);

    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'help') {
      print(...HELP_TEXT, '');
      return;
    }

    if (cmd === 'ls' || cmd === 'ls -a') {
      const showAll = cmd === 'ls -a';
      const map = showAll ? FILES_ALL : FILES_VISIBLE;
      const files = map[cwd] ?? [];
      print(...files.map((f) => `  ${f}`), '');
      return;
    }

    if (cmd === 'cd .secret') {
      if (cwd === '~') {
        setCwd('~/.secret');
        print('  Entrando em .secret/', '');
      } else {
        print('  Pasta não encontrada neste diretório.', '');
      }
      return;
    }

    if (cmd === 'cd ..' || cmd === 'cd ~') {
      setCwd('~');
      print('  Voltando para ~', '');
      return;
    }

    if (cmd.startsWith('cat ')) {
      const filename = cmd.slice(4).trim();
      const key = `${cwd}/${filename}`;
      const content = FILE_CONTENTS[key];
      if (content) {
        const lines = content.split('\n').map((l) => `  ${l}`);
        print(...lines, '');
        if (key === '~/.secret/flag.txt') {
          setTimeout(() => setWon(true), 600);
        }
      } else {
        print(`  cat: ${filename}: Arquivo não encontrado`, '');
      }
      return;
    }

    print(`  Comando não reconhecido: "${cmd}". Digite "help".`, '');
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        ref={overlayRef}
        className="relative w-full max-w-2xl rounded-xl overflow-hidden border border-purple-500/40
                   shadow-[0_0_40px_rgba(139,0,255,0.3)]"
        style={{ background: '#0a0a0a' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-purple-900/60"
             style={{ background: '#111' }}>
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="flex-1 text-center text-xs text-purple-300/60 font-mono">
            KOS-Terminal — CTF Edition
          </span>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white/80 transition-colors"
          >
            <MdClose size={16} />
          </button>
        </div>

        {/* Terminal output */}
        <div
          className="h-72 overflow-y-auto px-4 py-3 font-mono text-xs leading-5
                     scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-900/60"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div
              key={i}
              className="whitespace-pre-wrap"
              style={{ color: line.startsWith('>') ? '#a855f7' : '#22c55e' }}
            >
              {line || '\u00a0'}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Win overlay */}
        {won && (
          <div
            ref={winRef}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl"
            style={{ background: 'rgba(0,0,0,0.92)' }}
          >
            <span className="text-4xl">🎉</span>
            <p className="font-mono text-green-400 text-sm font-bold tracking-widest">
              FLAG CAPTURADA!
            </p>
            <p className="font-mono text-purple-400 text-xs">{FLAG}</p>
            <p className="font-mono text-white/40 text-[10px] mt-2">
              Fechando em 4s...
            </p>
          </div>
        )}

        {/* Input */}
        {!won && (
          <div
            className="flex items-center gap-2 px-4 py-2 border-t border-purple-900/60"
            style={{ background: '#0d0d0d' }}
          >
            <span className="font-mono text-purple-400 text-xs whitespace-nowrap">
              {cwd} $
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              className="flex-1 bg-transparent font-mono text-xs text-green-400 outline-none
                         caret-green-400 placeholder-white/20"
              placeholder="digite um comando..."
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}

CrowTerminal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
