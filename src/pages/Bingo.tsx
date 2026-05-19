import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const INITIAL = () => ({
  numbers: Array(90).fill(false) as boolean[],
  lastNumber: null as number | null,
  lineaCantada: false,
  bingoCantado: false,
});

export default function Bingo() {
  const [state, setState] = useState(INITIAL());
  const [lineaPieces, setLineaPieces] = useState(0);
  const [bingoPieces, setBingoPieces] = useState(0);
  const { width, height } = useWindowSize();

  const toggle = (i: number) => {
    setState(prev => {
      const nums = [...prev.numbers];
      nums[i] = !nums[i];
      return { ...prev, numbers: nums, lastNumber: nums[i] ? i + 1 : prev.lastNumber };
    });
  };

  const fireConfetti = (type: 'linea' | 'bingo') => {
    const pieces = type === 'bingo' ? 3000 : 2000;
    const setter = type === 'bingo' ? setBingoPieces : setLineaPieces;
    setter(pieces);
    const iv = setInterval(() => {
      setter(p => { if (p <= 0) { clearInterval(iv); return 0; } return p - (type === 'bingo' ? 30 : 60); });
    }, 100);
  };

  const toggleLinea = () => {
    setState(prev => ({ ...prev, lineaCantada: !prev.lineaCantada }));
    fireConfetti('linea');
  };

  const toggleBingo = () => {
    setState(prev => ({ ...prev, bingoCantado: !prev.bingoCantado }));
    fireConfetti('bingo');
  };

  // 9 filas × 10 columnas = 90 números
  const rows = Array.from({ length: 9 }, (_, r) =>
    Array.from({ length: 10 }, (_, c) => r * 10 + c)
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 sm:p-6" style={{ minHeight: 'calc(100vh - 8rem)' }}>
      {lineaPieces > 0 && <Confetti width={width} height={height} numberOfPieces={lineaPieces} />}
      {bingoPieces > 0 && <Confetti width={width} height={height} numberOfPieces={bingoPieces} />}

      <div className="flex flex-col xl:flex-row items-center justify-center gap-6 w-full max-w-7xl">

        {/* Grid de números */}
        <div className="bg-white rounded-2xl shadow-card border border-border p-4 sm:p-6 w-full xl:flex-1 overflow-x-auto">
          <p className="text-center text-sm text-muted mb-4 font-medium">Cartón: 1 €</p>
          <div className="flex flex-col gap-2 items-center">
            {rows.map((row, ri) => (
              <div key={ri} className="flex gap-1.5 sm:gap-2">
                {row.map(i => (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => toggle(i)}
                    className={`w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full text-xs sm:text-sm md:text-base font-bold transition-colors select-none ${state.numbers[i]
                        ? 'bg-accent text-white shadow-sm'
                        : 'bg-white text-dark border border-border hover:border-accent/40 hover:bg-accent-light'
                      }`}
                  >
                    {i + 1}
                  </motion.button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Panel de control */}
        <div className="flex flex-col items-center gap-5 bg-white rounded-2xl shadow-card border border-border p-6 w-full xl:w-56">
          {/* Último número */}
          <p className="text-xs text-muted font-semibold uppercase tracking-widest">Último número</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={state.lastNumber}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-accent bg-accent-light flex items-center justify-center"
            >
              <span className="text-5xl sm:text-6xl font-black text-accent">
                {state.lastNumber ?? '–'}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* LÍNEA / BINGO */}
          <div className="flex gap-3 w-full">
            <button
              onClick={toggleLinea}
              className={`flex-1 py-3 rounded-xl font-bold text-white text-sm transition-colors ${state.lineaCantada ? 'bg-green-500' : 'bg-accent hover:bg-accent-hover'
                }`}
            >
              {state.lineaCantada ? '✓ LÍNEA' : 'LÍNEA'}
            </button>
            <button
              onClick={toggleBingo}
              className={`flex-1 py-3 rounded-xl font-bold text-white text-sm transition-colors ${state.bingoCantado ? 'bg-green-500' : 'bg-accent hover:bg-accent-hover'
                }`}
            >
              {state.bingoCantado ? '✓ BINGO' : 'BINGO'}
            </button>
          </div>

          {/* Reset */}
          <button
            onClick={() => setState(INITIAL())}
            className="w-full py-2.5 rounded-xl border border-border text-muted text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}