import Image from "next/image";
import avatar from "./icons/avatar.svg";
import clsx from "clsx";

export function Profile({ className, name, avatar, rating }) {
  return (
    <div>
      <div
        className={clsx(
          "ml-auto flex items-center gap-2 text-start",
          className
        )}
      >
        <Image src={avatar} width={48} height={48} alt="avatar" className="" />
        <div className="overFlow-hidden">
          <div className="truncate text-teal-600 text-lg leading-tight transition duration-300 hover:text-teal-500 ">
            {name}
          </div>
          <div className="text-slate-400 text-xs leading-tight">
            Raiting: {rating}
          </div>
        </div>
      </div>
    </div>
  );
}
