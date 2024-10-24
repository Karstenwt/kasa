import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slide from "../../components/Slide/Slide";
import Collapse from "../../components/Collapse/Collapse";
import Stars from "../../components/Stars/Stars";
import Tagsname from "../../components/Tagsname/Tagsname";
import "./PropertyDetail.scss";

const PropertyDetail = ({ appartements }) => {
  // Récupère les données via les props
  const { id } = useParams();
  const navigate = useNavigate();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const selectedHouse = appartements.find((logement) => logement.id === id); // Utilise les appartements passés en props
    if (!selectedHouse) {
      navigate("/404");
    } else {
      setHouse(selectedHouse);
    }
  }, [id, navigate, appartements]); // Ajoute appartements comme dépendance

  if (!house) {
    return <div>Loading...</div>;
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
            <Stars rating={parseInt(house.rating)} />
          </div>
        </div>
      </div>

      {/* Section collapses pour Description et Equipments */}
      <div className="logement-collapses">
        <Collapse title="Description">{house.description}</Collapse>
        <Collapse title="Equipments">
          <ul>
            {house.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default PropertyDetail;
