import React, { useState, useEffect } from "react";
import "./Slide.scss";
import arrowLeft from "../../assets/images/arrowleft.png";
import arrowRight from "../../assets/images/arrowright.png";
import propTypes from "prop-types";

const Slide = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="slide">
      <div className="slide-container">
        {images.length > 1 && (
          <>
            <div onClick={prevSlide} className="arrow left">
              <img src={arrowLeft} alt="arrow left" />
            </div>
            <div onClick={nextSlide} className="arrow right">
              <img src={arrowRight} alt="arrow right" />
            </div>
          </>
        )}
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide}`}
          className="slide-image"
        />
        <div className="slide-counter">
          {currentSlide + 1}/{images.length}
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  images: propTypes.array.isRequired,
};

export default Slide;
