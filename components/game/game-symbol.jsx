import { Cross } from "./icons/cross.jsx";
import { Circle } from "./icons/circle.jsx";
import { Triangle } from "./icons/triangle.jsx";
import { Square } from "./icons/square.jsx";
import { GAME_SYMBOLS } from "./constants.js";
import clsx from "clsx";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: Cross,
      [GAME_SYMBOLS.CIRCLE]: Circle,
      [GAME_SYMBOLS.TRIANGLE]: Triangle,
      [GAME_SYMBOLS.SQUARE]: Square,
    }[symbol] ?? Cross;
  return <Icon className={clsx(className, "")} />;
}
