import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BingoState {
  numbers: boolean[];
  lastNumber: number | null;
  lineaCantada: boolean;
}

export default function Bingo() {
  const [currentSession, setCurrentSession] = useState(1);
  const [bingoStates, setBingoStates] = useState<BingoState[]>([
    { numbers: Array(90).fill(false), lastNumber: null, lineaCantada: false },
    { numbers: Array(90).fill(false), lastNumber: null, lineaCantada: false },
    { numbers: Array(90).fill(false), lastNumber: null, lineaCantada: false },
  ]);

  useEffect(() => {
    const savedStates = localStorage.getItem('bingoStates');
    if (savedStates) {
      setBingoStates(JSON.parse(savedStates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bingoStates', JSON.stringify(bingoStates));
  }, [bingoStates]);

  const toggleNumber = (index: number) => {
    setBingoStates((prevStates) => {
      const newStates = [...prevStates];
      const sessionIndex = currentSession - 1;
      const newNumbers = [...newStates[sessionIndex].numbers];
      newNumbers[index] = !newNumbers[index];
      newStates[sessionIndex] = {
        ...newStates[sessionIndex],
        numbers: newNumbers,
        lastNumber: newNumbers[index]
          ? index + 1
          : newStates[sessionIndex].lastNumber,
      };
      return newStates;
    });
  };

  const toggleLinea = () => {
    setBingoStates((prevStates) => {
      const newStates = [...prevStates];
      const sessionIndex = currentSession - 1;
      newStates[sessionIndex] = {
        ...newStates[sessionIndex],
        lineaCantada: !newStates[sessionIndex].lineaCantada,
      };
      return newStates;
    });
  };

  const resetSession = () => {
    setBingoStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[currentSession - 1] = {
        numbers: Array(90).fill(false),
        lastNumber: null,
        lineaCantada: false,
      };
      return newStates;
    });
  };

  const currentState = bingoStates[currentSession - 1];

  const renderColumn = (startCol: number, endCol: number) => {
    const grid = [];
    for (let row = 0; row < 9; row++) {
      const rowNumbers = [];
      for (let col = startCol; col < endCol; col++) {
        const index = row * 10 + col;
        if (index < 90) {
          rowNumbers.push(renderCircle(index));
        }
      }
      grid.push(
        <div key={row} className="flex gap-2 justify-center">
          {rowNumbers}
        </div>
      );
    }
    return <div className="flex flex-col gap-2">{grid}</div>;
  };

  const renderCircle = (index: number) => (
    <motion.button
      key={index}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => toggleNumber(index)}
      className={`w-12 h-12 md:w-14 md:h-14 xl:w-18 xl:h-18 rounded-full text-sm md:text-lg xl:text-4xl font-bold flex items-center justify-center ${
        currentState.numbers[index]
          ? 'bg-accent text-white'
          : 'bg-white text-gray-800 border border-gray-300'
      }`}
    >
      {index + 1}
    </motion.button>
  );

  return (
    <div className="w-screen h-auto flex flex-col p-2 md:p-4">
      {/* Cartón */}
      <div className="text-center text-sm md:text-base font-semibold mb-2">
        Cartón: 1 €
      </div>

      <div className="flex-1 flex flex-row items-center justify-center gap-4">
        {/* Columna izquierda (números 1–50) */}
        {renderColumn(0, 5)}

        {/* Columna central */}
        <div className="flex flex-col items-center justify-center gap-3 px-2">
          <h2 className="text-xl md:text-2xl font-bold">
            BINGO {currentSession}
          </h2>
          <button
            onClick={toggleLinea}
            className={`px-6 py-1 rounded-md text-white font-bold ${
              currentState.lineaCantada ? 'bg-green-500' : 'bg-red-600'
            }`}
          >
            LÍNEA
          </button>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 md:w-32 md:h-32 xl:w-80 xl:h-80 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-md"
          >
            <span className="text-6xl md:text-5xl xl:text-9xl font-bold text-accent">
              {currentState.lastNumber ?? '--'}
            </span>
          </motion.div>

          <div className="w-32 md:w-48 xl:w-64">
            <img
              src={`/assets/premios/bingo${currentSession}_bingo.png`}
              alt={`Premio Bingo ${currentSession}`}
              className="w-full rounded-lg"
            />
          </div>

          <div className="flex gap-2 mt-2">
            {[1, 2, 3].map((session) => (
              <button
                key={session}
                onClick={() => setCurrentSession(session)}
                className={`px-3 py-1 rounded ${
                  currentSession === session
                    ? 'bg-accent text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {session}
              </button>
            ))}
          </div>

          <button
            onClick={resetSession}
            className="mt-1 px-4 py-1 bg-gray-200 text-gray-700 rounded"
          >
            RESET
          </button>
        </div>

        {/* Columna derecha (números 51–90) */}
        {renderColumn(5, 10)}
      </div>
    </div>
  );
}
