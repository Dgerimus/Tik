import { useState } from "react";
import "./App.css";
import GameInfo from "./components/GameInfo.jsx";

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
    if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) return [a, b, c];
  }
};

function App() {
  const defaultData = [null, null, null, null, null, null, null, null, null];

  const [cells, setCells] = useState(defaultData);

  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinerrSequence] = useState();

  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_X) return "symbol--x";
    if (symbol === SYMBOL_O) return "symbol--y";
    return "";
  };

  const renderSymbol = (symbol) => (
    <span className={`symbol ${getSymbolClassName(symbol)} `}>{symbol}</span>
  );
  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;
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

  const restartOnClick = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setCurrentStep(SYMBOL_X);
    setWinerrSequence(undefined);
  };

  return (
    <div className="game">
      <GameInfo
        status={isDraw ? "draw" : winnerSequence ? "winner" : "move"}
        step={!isDraw ? (winnerSymbol ? winnerSymbol : currentStep) : ""}
        stepColor={getSymbolClassName(winnerSymbol ?? currentStep)}
      />
      <div className="game-field">
        {cells.map((symbol, index) => {
          const isWinner = winnerSequence?.includes(index);
          return (
            <button
              onClick={() => handleCellClick(index)}
              key={index}
              className={`cell ${isWinner ? "cell--win" : ""}`}
            >
              {symbol ? renderSymbol(symbol) : null}
            </button>
          );
        })}
      </div>
      <button className="BtnRe" onClick={restartOnClick}>
        Restart
      </button>
    </div>
  );
}

export default App;
