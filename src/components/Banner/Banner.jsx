import React from "react";
import "./Banner.scss";

const Banner = ({ image, title }) => {
  return (
    <div className="bannerTitle" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
