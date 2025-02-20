import clsx from "clsx";
import { Cross } from "./icons/cross";
import { Circle } from "./icons/circle";
import { Uibutton } from "../uikit/ui-button";
import { useState } from "react";

import { GAME_SYMBOLS, MOVE_ORDER } from "./constants.js";
import { GameSymbol } from "./game-symbol.jsx";
import { useGameState } from "./use-game-state.js";

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function GameField({ className, playersCount }) {
  const { cells, currentMove, nextMove, handleCellClick } =
    useGameState(playersCount);

  const actions = (
    <>
      <Uibutton size="md" variant="primary">
        Draw
      </Uibutton>
      <Uibutton size="md" variant="outline">
        Surrender
      </Uibutton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell key={index} onClick={() => handleCellClick(index)}>
            {symbol && (
              <GameSymbol symbol={symbol} className="w-5 h-5"></GameSymbol>
            )}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -mt-px -ml-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center text-xl text-slate-900 gap-1">
          <span className="min-w-[50px] text-left">Turn:</span>
          <GameSymbol symbol={currentMove} className="w-5 h-5 shrink-0" />
        </div>
        <div className="flex items-center text-xs leading-tight text-slate-400 gap-1">
          <span className="min-w-[50px] text-left">Next turn:</span>
          <GameSymbol symbol={nextMove} className="w-5 h-5 shrink-0" />
        </div>
      </div>
      {actions}
    </div>
  );
}
function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}
