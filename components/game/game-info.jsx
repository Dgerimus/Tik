import clsx from "clsx";
import { Profile } from "../profile/profile";
import { Cross } from "./icons/cross.jsx";
import { Circle } from "./icons/circle.jsx";
import { Triangle } from "./icons/triangle.jsx";
import { square } from "./icons/square.jsx";
import { GameSymbol } from "./game-symbol.jsx";
import { GAME_SYMBOLS } from "./constants.js";

import avatar1 from "./images/avatar1.png";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";
import avatar4 from "./images/avatar4.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Hero123",
    rating: 1440,
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Hero234",
    rating: 1140,
    avatar: avatar2,
    symbol: GAME_SYMBOLS.CIRCLE,
  },
  {
    id: 3,
    name: "Hero345",
    rating: 1040,
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Hero1244",
    rating: 1840,
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4  justify-between grid grid-cols-2 gap-3"
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;
  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  return (
    <div className="flex gap-6 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div
        className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg text-semibold",
          isRight && "order-1 ",
          isDanger ? " text-orange-600" : "text-slate-900"
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
