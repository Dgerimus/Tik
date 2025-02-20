import { GameTitle } from "../components/game/game-title";
import { Header } from "../components/header/header";
import { GameInfo } from "../components/game/game-info";
import { GameField } from "../components/game/game-field";
import { useState } from "react";
import { useGameState } from "../components/game/use-game-state.js";

export default function HomePage() {
  const [playersCount] = useState(4);
  const { cells, currentMove, nextMove, handleCellClick } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount}></GameTitle>
        <GameInfo className="mt-4" playersCount={playersCount}></GameInfo>
        <GameField
          className="mt-6"
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
        ></GameField>
      </main>
    </div>
  );
}
