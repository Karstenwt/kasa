import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import annonces from "../data/annonces.json"; // Importer les annonces correctement
import Slide from "../components/Slide"; // Assurez-vous que le composant Slide est bien importé
import Collapse from "../components/Collapse"; // Importez Collapse pour Description et Equipements
import Stars from "../components/Stars"; // Assurez-vous que Stars est bien défini et importé
import Tagsname from "../components/Tagsname"; // Importez correctement Tagsname pour les tags
import "../styles/PropertyDetail.scss"; // Assurez-vous que le SCSS est bien importé

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
        <Collapse
          title="Equipments"
          content={house.equipments.join(", ")}
        />{" "}
        {/* Join to display array correctly */}
      </div>
    </div>
  );
};

export default PropertyDetail;
