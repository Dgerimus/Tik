import Image from "next/image";
import avatar from "./icons/avatar.svg";

export function Profile() {
  return (
    <div>
      <div className="ml-auto flex items-center gap-2 text-start">
        <Image src={avatar} width={48} height={48} alt="avatar" className="" />
        <div>
          <div className="text-teal-600 text-lg leading-tight transition duration-300 hover:text-teal-500 ">
            Nickname
          </div>
          <div className="text-slate-400 text-xs leading-tight">
            Raiting: 1630
          </div>
        </div>
      </div>
    </div>
  );
}
