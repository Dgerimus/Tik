import { useState } from "react";

function useGameState() {
  const defaultData = [null, null, null, null, null, null, null, null, null];
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";

  const computerWtnner = (cell) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c])
        return [a, b, c];
    }
  };

  const [cells, setCells] = useState(defaultData);
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinerrSequence] = useState();

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) {
      return;
    }
    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computerWtnner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinerrSequence(winner);
  };
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_X) return "symbol--x";
    if (symbol === SYMBOL_O) return "symbol--y";
    return "";
  };
  const restartOnClick = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setCurrentStep(SYMBOL_X);
    setWinerrSequence(undefined);
  };
  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;

  return {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    restartOnClick,
    winnerSymbol,
    isDraw,
    SYMBOL_X,
    SYMBOL_O,
    getSymbolClassName,
  };
}

export default useGameState;
