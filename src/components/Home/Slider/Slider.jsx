import React from "react";
import "./slider.css";
import industry1 from "../../../Assets/Slider/industry1.avif";
import industry2 from "../../../Assets/Slider/industry2.jpg";
import industry3 from "../../../Assets/Slider/industry3.jpg";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={industry1}
                className="d-block w-100 slider__img"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src={industry2}
                className="d-block w-100 slider__img"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src={industry3}
                className="d-block w-100 slider__img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
