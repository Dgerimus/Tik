import Image from "next/image";
import logoSrc from "./icons/logo.svg";
import { DropDownList } from "./icons/dropDownList.jsx";
import { Profile } from "../profile/profile";
import { Uibutton } from "../uikit/ui-button.jsx";

export function Header() {
  return (
    <header className=" flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" className="w-16 " />
      <div className="w-px h-16 bg-slate-200 mx-6" />
      <Uibutton className="w-44" variant="primary" size="lg">
        Play
      </Uibutton>

      <button className="ml-auto flex item-center gap-2 text-start ">
        <Profile name="Hero123" rating="1440" />
        <DropDownList />
      </button>
    </header>
  );
}
