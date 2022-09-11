import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation  text-white w-[80%]">
      <ul className="flex flex-row justify-around text-2xl">
        <NavLink to="/">
          <li className="cursor-pointer">Accueil</li>
        </NavLink>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
};

export default Navigation;
