import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = ({ appartements }) => {
  return (
    <div>
      <Banner
        image="/image/imagebanniere.jpeg"
        title="Chez vous, partout et ailleurs"
      />
      <div className="property-list">
        {appartements.map((appartement) => (
          <Card
            key={appartement.id}
            id={appartement.id}
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
