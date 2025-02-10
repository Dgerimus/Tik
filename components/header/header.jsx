import Image from "next/image";
import logoSrc from "./icons/logo.svg";
import avatar from "./icons/avatar.svg";
import dropDownList from "./icons/dropDownList.svg";

export function Header() {
  return (
    <header className=" flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" className="w-16 " />
      <div className="w-px h-16 bg-slate-200 mx-6" />
      <button className="text-xl w-44 bg-teal-600 text-white rounded-lg px-5 py-2 transition duration-300 hover:bg-teal-500 ">
        Play
      </button>
      <button className="ml-auto flex items-center gap-2 text-start">
        <Image src={avatar} width={48} height={48} alt="avatar" className="" />
      </button>
      <div>
        <div className="text-teal-600 text-lg leading-tight transition duration-300 hover:text-teal-500 ">
          Nickname
        </div>
        <div className="text-slate-400 text-xs leading-tight">
          Raiting: 1630
        </div>
      </div>
      <button>
        <svg
          className="w-6 h-6 transition duration-300 fill-gray-500 hover:fill-teal-500"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path fill="none" d="M0 0h24v24H0z"></path>{" "}
              <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </header>
  );
}
