import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__message">
        Oups ! La page que vous demandez n'existe pas
      </h2>
      <Link to="/" className="not-found__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
