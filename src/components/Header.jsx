import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-black h-[91px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
