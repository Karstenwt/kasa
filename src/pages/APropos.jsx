import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/APropos.scss";

const APropos = () => {
  return (
    <div className="apropos-page">
      <Banner image="/image/imageapropos.jpeg" />
      <div className="apropos-content">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa.
        </Collapse>
        <Collapse title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite.
        </Collapse>
        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa.
        </Collapse>
      </div>
    </div>
  );
};

export default APropos;
