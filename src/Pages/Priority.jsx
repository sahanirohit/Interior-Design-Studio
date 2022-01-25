import React from "react";
import { FaDropbox, FaFaucet, FaKey, FaMapMarked } from "react-icons/fa";

export default function Priority() {
  return (
    <>
      <div className="container-fluid priority-bg">
        <div className="priority__section">
          <div className="row">
            <div className="col-lg-6 col-10 mx-auto">
              <h1 className="priority__h1">YOUR PRIORITY IS OUR PRIORITY</h1>
              <p className="priority__p">
                Competently benchmark backward-compatible technologies vis-a-vis
                parallel convergence. Rapidiously innovate stand-alone.
              </p>
            </div>
          </div>
          <div className="container">
            <ul className="nav tabs__parent" id="myTab" role="tablist">
              <li className="nav-item tabs__child" role="presentation">
                <a
                  href=""
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true">
                  <FaKey className="tabs__icon" />
                </a>
                <p>24x7 Available</p>
              </li>
              <li className="nav-item tabs__child" role="presentation">
                <a
                  href=""
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false">
                  <FaDropbox className="tabs__icon" />
                </a>
                <p>Complete Solutions</p>
              </li>
              <li className="nav-item tabs__child" role="presentation">
                <a
                  href=""
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false">
                  <FaFaucet className="tabs__icon" />
                </a>
                <p>Water Treatments</p>
              </li>
              <li className="nav-item tabs__child" role="presentation">
                <a
                  href=""
                  className="nav-link"
                  id="map-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#map"
                  type="button"
                  role="tab"
                  aria-controls="map"
                  aria-selected="false">
                  <FaMapMarked className="tabs__icon" />
                </a>
                <p>Location Independant</p>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab">
                <div className="priority__parent">
                  <div className="priority__left"></div>
                  <div className="priority__right shadow">
                    <div className="right__content">
                      <h4>We help people to create new Website.</h4>
                      <p>
                        Uniquely productize cross-unit action items with
                        multifunctional imperatives. Quickly communicate
                        collaborative relationships rather than timely
                        materials. Progressively foster unique interfaces
                        vis-a-vis backend e-services.
                      </p>
                      <a href="" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab">
                <div className="solution__priority__parent">
                  <div className="solution__priority__left shadow">
                    <div className="solution__left__content">
                      <h4>We help people to create new Website.</h4>
                      <p>
                        Uniquely productize cross-unit action items with
                        multifunctional imperatives. Quickly communicate
                        collaborative relationships rather than timely
                        materials. Progressively foster unique interfaces
                        vis-a-vis backend e-services.
                      </p>
                      <a href="" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="solution__priority__right"></div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab">
                <div className="water__priority__parent">
                  <div className="water__priority__left"></div>
                  <div className="water__priority__right shadow">
                    <div className="water__right__content">
                      <h4>We help people to create new Website.</h4>
                      <p>
                        Uniquely productize cross-unit action items with
                        multifunctional imperatives. Quickly communicate
                        collaborative relationships rather than timely
                        materials. Progressively foster unique interfaces
                        vis-a-vis backend e-services.
                      </p>
                      <a href="" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="map"
                role="tabpanel"
                aria-labelledby="map-tab">
                <div className="location__priority__parent">
                  <div className="location__priority__left shadow">
                    <div className="location__left__content">
                      <h4>We help people to create new Website.</h4>
                      <p>
                        Uniquely productize cross-unit action items with
                        multifunctional imperatives. Quickly communicate
                        collaborative relationships rather than timely
                        materials. Progressively foster unique interfaces
                        vis-a-vis backend e-services.
                      </p>
                      <a href="" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="location__priority__right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
