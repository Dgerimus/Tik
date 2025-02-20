import Link from "next/link";
import { LeftArrow } from "./icons/leftArrow.jsx";
import { Person } from "./icons/person.jsx";
import { Star } from "./icons/star1.jsx";
import { Timer } from "./icons/timer.jsx";

export function GameTitle({ playersCount }) {
  return (
    <div className=" pl-2">
      <Link
        href="/"
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight"
      >
        <LeftArrow /> Main page
      </Link>
      <h1 className="text-4xl leading-tight">Tic Tac Toe</h1>
      <div className="flex items-center gap-3 leading-tight text-slate-400 text-sx">
        <Star />
        <div className="flex items-center gap-1 ">
          <Person />
          {playersCount}
        </div>
        <div className="flex items-center gap-1 ">
          <Timer /> 1 minute per turn
        </div>
      </div>
    </div>
  );
}
