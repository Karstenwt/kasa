import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div
      className="bannerTitle"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)`,
      }}
    >
      <h1>
        Chez vous,
        <span className="mobile-line-break"> partout et ailleurs</span>
      </h1>
    </div>
  );
};

export default Banner;
