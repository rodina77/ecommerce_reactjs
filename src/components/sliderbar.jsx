import React from "react";

const Sliderbar = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/images/Virgin-Red-online-shopping-offers.jpg"
              className="d-block w-100"
              alt="image_1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/Shopping.jpg"
              className="d-block w-100"
              alt="image_2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/Happy_Shopping_artinya.jpg"
              className="d-block w-100"
              alt="image_3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Sliderbar;
