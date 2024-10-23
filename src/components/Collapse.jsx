import React, { useState } from "react";
import "../styles/Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // Le collapse est fermé par défaut

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Alterne entre ouvert et fermé
  };

  return (
    <div className="collapse">
      <div className="collapse__title" onClick={toggleCollapse}>
        <span className="collapse__title--txt">{title}</span>
        <img
          className={`collapse__title--btn ${isOpen ? "rotate" : ""}`} // Appliquer la classe 'rotate' si isOpen est true
          src="/image/arrowUp.png" // Garde la même image de flèche, juste la rotation la modifie
          alt={isOpen ? "Fermer" : "Ouvrir"}
        />
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
