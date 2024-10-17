import React, { useState } from "react";
import "../styles/Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // Le collapse est fermé par défaut

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__title" onClick={toggleCollapse}>
        <span className="collapse__title--txt">{title}</span>
        {/* Utilisation des images pour les flèches */}
        <img
          className="collapse__title--btn"
          src={isOpen ? "/image/arrowDown.png" : "/image/arrowUp.png"}
          alt={isOpen ? "Fermer" : "Ouvrir"}
        />
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
};

export default Collapse;
