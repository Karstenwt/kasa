import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, title, location, cover }) => {
  return (
    <Link
      to={`/property/${id}`}
      className="card"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="card__Filter"></div>
      <div className="card__Txt">
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
    </Link>
  );
};

export default Card;
