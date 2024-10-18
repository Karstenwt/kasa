import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import annonces from "../data/annonces.json";
import Slide from "../components/Slide";
import Collapse from "../components/Collapse";
import Stars from "../components/Stars";
import Tagsname from "../components/Tagsname";
import "../styles/PropertyDetail.scss";
const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const selectedHouse = annonces.find((logement) => logement.id === id);
    if (!selectedHouse) {
      navigate("/404");
    } else {
      setHouse(selectedHouse);
    }
  }, [id, navigate]);

  if (!house) {
    return <div>Loading...</div>; // Retournez une indication de chargement si les données ne sont pas encore disponibles
  }

  return (
    <div className="property-details">
      <Slide images={house.pictures} />
      <div className="logement-details">
        <div className="logement-infos">
          <h2 className="logement-title">{house.title}</h2>
          <p className="logement-location">{house.location}</p>
          <Tagsname tags={house.tags} />
        </div>
        <div className="logement-host-and-rating">
          <div className="logement-host">
            <p>{house.host.name}</p>
            <img src={house.host.picture} alt="Host" className="host-picture" />
          </div>
          <div className="logement-rating">
            <Stars rating={house.rating} />
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={house.description} />
        <Collapse title="Equipments" content={house.equipments.join(", ")} /> {}
      </div>
    </div>
  );
};

export default PropertyDetail;
