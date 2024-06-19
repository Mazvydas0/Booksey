import * as React from "react";
import HamburgerMenu from "./hamburger-menu";
import AuthButton from "./auth-button";
import NavBar from "./nav-bar";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-40 w-full h-14 flex justify-center bg-[#9CA3AF] shadow">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-5 py-2.5 my-1 bg-[#dbd7d6] border border-gray-200 rounded-full lg:px-10">
        <Logo />
        <div className="hidden lg:flex items-center flex-grow justify-center">
          <NavBar />
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            <AuthButton />
          </div>
          <div className="flex items-center lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
