import "./App.css";
import GameInfo from "./components/GameInfo.jsx";
import useGameState from "./components/useGameLogic.jsx";

function App() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    restartOnClick,
    winnerSymbol,
    isDraw,
    getSymbolClassName,
  } = useGameState();

  const renderSymbol = (symbol) => (
    <span className={`symbol ${getSymbolClassName(symbol)} `}>{symbol}</span>
  );

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
