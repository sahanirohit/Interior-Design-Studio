import React from "react";

export default function Home() {
  return (
    <>
      <div className="container-fluid home__bg">
        <div className="home__content">
          <div className="row">
            <div className="col-lg-6 col-10 mx-auto">
              <h1 className="text-shadow home__content__h1">Design Studio.</h1>
              <div className="content">
                <span className="home__content__span">
                  Sell your home to us and skip the hassle of
                </span>
                <br />
                <span className="home__content__span">
                  repairs, showings and months of uncertainty
                </span>
              </div>
              <div className="input-group mt-5 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Email Address..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg">
        <div className="home__parent">
          <div className="home__left home__child">
            <h1>3,583</h1>
            <p>Happy Customers</p>
          </div>
          <div className="home__right home__child">
            <p>
              Efficiently synthesize magnetic niches via resource <br />
              maximizing procrastinate adaptive web-readiness.
            </p>
            <p>John Doe, Google Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
}
