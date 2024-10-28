import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__title" onClick={toggleCollapse}>
        <span className="collapse__title--txt">{title}</span>
        <img
          className={`collapse__title--btn ${isOpen ? "rotate" : ""}`}
          src="/image/arrowUp.png"
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
