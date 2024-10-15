import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card"; // Import du composant Card
import annonces from "../data/annonces.json"; // Import du fichier JSON

const Home = () => {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    setAppartements(annonces); // Charger les données des annonces
  }, []);

  return (
    <div>
      <Banner
        image="/image/imagebanniere.jpeg"
        title="Chez vous, partout et ailleurs"
      />
      <div className="appartement-list">
        {appartements.map((appartement) => (
          <Card
            key={appartement.id}
            title={appartement.title}
            location={appartement.location}
            cover={appartement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
