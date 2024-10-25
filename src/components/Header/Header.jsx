import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={"/image/LOGO.png"} alt="Kasa Logo" />
      </div>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
