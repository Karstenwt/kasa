import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss"; // N'oublie pas d'ajouter les styles dans Header.scss

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={"/image/LOGO.png"} alt="Kasa Logo" />
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Accueil
        </Link>
        <Link to="/apropos" className="header__link">
          À propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
