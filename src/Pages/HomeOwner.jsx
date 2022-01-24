import React from "react";
import { FaStar, FaHome, FaCompass, FaMapSigns } from "react-icons/fa";

export default function HomeOwner() {
  return (
    <>
      <div className="container-fluid home__owner_bg">
        <div className="home__owner__h1">
          <h1>Welcome to a better way to Live your Life.</h1>
        </div>
      </div>
      <div className="container">
        <div className="row happy_customers">
          <div className="col-lg-6 col-10 mx-auto">
            <h1>3,583 happy homeowners and counting...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-10 mx-auto">
            <p className="top__reviews">Top Best Reviews of Canvas</p>
            <hr />
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row review__row">
                    <div className="col-lg-4 col-10">
                      <p>Datanetpress</p>
                      <p>Themeforest Author</p>
                      <p className="review__icons__align">
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                      </p>
                      <p>Sold 21-9-2021</p>
                      <p>After 19 Days</p>
                    </div>
                    <div className="col-lg-8 col-10">
                      <h3>Awesome Template and Good Support</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Unde, maxime cumque! Magni vero, velit aperiam
                        reprehenderit quia eius dolorum, ut impedit soluta
                        incidunt tempore molestiae mollitia dolor culpa animi
                        possimus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row review__row">
                    <div className="col-lg-4 col-10">
                      <p>Datanetpress</p>
                      <p>Themeforest Author</p>
                      <p className="review__icons__align">
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                      </p>
                      <p>Sold 21-9-2021</p>
                      <p>After 19 Days</p>
                    </div>
                    <div className="col-lg-8 col-10">
                      <h3>The Support is wonderfull as well</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Unde, maxime cumque! Magni vero, velit aperiam
                        reprehenderit quia eius dolorum, ut impedit soluta
                        incidunt tempore molestiae mollitia dolor culpa animi
                        possimus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row review__row">
                    <div className="col-lg-4 col-10">
                      <p>Datanetpress</p>
                      <p>Themeforest Author</p>
                      <p className="review__icons__align">
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                        <FaStar className="review__icons" />
                      </p>
                      <p>Sold 21-9-2021</p>
                      <p>After 19 Days</p>
                    </div>
                    <div className="col-lg-8 col-10">
                      <h3>Nice Design Quality and Sell Support</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Unde, maxime cumque! Magni vero, velit aperiam
                        reprehenderit quia eius dolorum, ut impedit soluta
                        incidunt tempore molestiae mollitia dolor culpa animi
                        possimus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon next-icon-previus"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon next-icon-next"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden ">Next</span>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row instructions">
          <div className="col-lg-4 col-10 mx-auto instructions-content">
            <FaHome className="path" />
            <h3>Commercial & Personal Use</h3>
            <p>
              Proactively reintermediate B2C infomediaries before multimedia
              methods of empowerment.
            </p>
          </div>
          <div className="col-lg-4 col-10 mx-auto instructions-content">
            <FaCompass className="path" />
            <h3>Vaastu Compliant</h3>
            <p>
              Uniquely formulate principle-centered applications after just in
              time opportunities.
            </p>
          </div>
          <div className="col-lg-4 col-10 mx-auto instructions-content">
            <FaMapSigns className="path" />
            <h3>Great Location</h3>
            <p>
              Collaboratively reinvent ubiquitous functionalities vis
              future-proof systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
