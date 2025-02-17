import Image from "next/image";
import logoSrc from "./icons/logo.svg";
import { DropDownList } from "./icons/dropDownList.jsx";
import { Profile } from "../profile/profile";

export function Header() {
  return (
    <header className=" flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" className="w-16 " />
      <div className="w-px h-16 bg-slate-200 mx-6" />
      <button className="text-xl w-44 bg-teal-600 text-white rounded-lg px-5 py-2 transition duration-300 hover:bg-teal-500 ">
        Play
      </button>

      <button className="ml-auto flex item-center gap-2 text-start ">
        <Profile />
        <DropDownList />
      </button>
    </header>
  );
}
