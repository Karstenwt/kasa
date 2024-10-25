import React from "react";
import "./Banner.scss";

const Banner = ({ image }) => {
  return (
    <div className="bannerTitle" style={{ backgroundImage: `url(${image})` }}>
      <h1>
        Chez vous,
        <span className="mobile-line-break"> partout et ailleurs</span>
      </h1>
    </div>
  );
};

export default Banner;
