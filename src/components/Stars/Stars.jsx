import "./Stars.scss";
import React from "react";
import propTypes from "prop-types";

const Stars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <img
            key={i}
            src={`${process.env.PUBLIC_URL}/image/star_active.png`}
            alt="star"
            className="star-full"
          />
        );
      } else {
        stars.push(
          <img
            key={i}
            src={`${process.env.PUBLIC_URL}/image/star_inactive.png`}
            alt="star"
            className="star-empty"
          />
        );
      }
    }
    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

Stars.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Stars;
