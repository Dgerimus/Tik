import "../App.css";
function GameInfo({ status, step, stepColor }) {
  const state = {
    move: "Ход",
    draw: "Ничья",
    winner: "Победитель",
    error: "ошибка",
  };

  const currentState = state[status];

  return (
    <>
      <div className={"game-info "}>
        {currentState + " "} <span className={stepColor}>{step}</span>
      </div>
    </>
  );
}

export default GameInfo;
