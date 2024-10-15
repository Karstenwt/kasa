import React from "react";
import "../styles/Card.scss"; // Import des styles

const Card = ({ title, location, cover }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${cover})` }}>
      <div className="card__Filter"></div>
      <div className="card__Txt">
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
