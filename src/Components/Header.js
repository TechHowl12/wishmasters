import React from "react";
import Logo from "../assets/Logo.png";

export const Header = () => {
  return (
    <nav className="bg-[#00603A]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={Logo} className="h-8" alt="Flowbite Logo" />

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center mb-1 p-2 w-10 h-10 justify-center text-sm text-white md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="9" width="30" height="4" fill="#ffffff"></rect>
            <rect y="18" width="30" height="4" fill="#ffffff"></rect>
            <rect y="27" width="30" height="4" fill="#ffffff"></rect>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 sm:space-x-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 uppercase font-normal text-md tracking-wide"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 uppercase font-normal text-md tracking-wide"
                aria-current="page"
              >
                upcoming contests
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 uppercase font-normal text-md tracking-wide"
                aria-current="page"
              >
                about us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 uppercase font-normal text-md tracking-wide"
                aria-current="page"
              >
                contact
              </a>
            </li>
          </ul>
          <button onClick={()=>alert("COMING SOON")} className="bg-white text-[#00603A] uppercase w-full py-2 block md:hidden">
            login
          </button>
        </div>
        <button onClick={()=>alert("COMING SOON")} className="bg-white text-[#00603A] uppercase px-8 py-2 hidden md:block hover:scale-110 transition-all">
          login
        </button>
      </div>
    </nav>
  );
};
