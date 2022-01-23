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
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto  tabs-menu">
                <ul className="nav" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      href=""
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      <FaKey />
                    </a>
                    <p>24x7 Available</p>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href=""
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <FaDropbox />
                    </a>
                    <p>Complete Solutions</p>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href=""
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <FaFaucet />
                    </a>
                    <p>Water Treatments</p>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href=""
                      className="nav-link"
                      id="map-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#map"
                      type="button"
                      role="tab"
                      aria-controls="map"
                      aria-selected="false"
                    >
                      <FaMapMarked />
                    </a>
                    <p>Location Independant</p>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="container tab-menu-content">
                      <div className="content__section">
                        <div className="available__content__left shadow">
                          <h3>We help people to create new Website.</h3>
                          <p>
                            Uniquely productize cross-unit action items with
                            multifunctional imperatives. Quickly communicate
                            collaborative relationships rather than timely
                            materials. Progressively foster unique interfaces
                            vis-a-vis backend e-services.
                          </p>
                          <a href="" className="btn btn-primary">
                            READ CANVAS'S STORY
                          </a>
                        </div>
                        <div className="available__content__right"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="container tab-menu-content">
                      <div className="solution__container">
                        <div className="solution__content__left"></div>
                        <div className="solution__content__right shadow">
                          <h3>We help people to create new Website.</h3>
                          <p>
                            Uniquely productize cross-unit action items with
                            multifunctional imperatives. Quickly communicate
                            collaborative relationships rather than timely
                            materials. Progressively foster unique interfaces
                            vis-a-vis backend e-services.
                          </p>
                          <a href="" className="btn btn-primary">
                            READ CANVAS'S STORY
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="container tab-menu-content">
                      <div className="content__section">
                        <div className="water__content__left shadow">
                          <h3>We help people to create new Website.</h3>
                          <p>
                            Uniquely productize cross-unit action items with
                            multifunctional imperatives. Quickly communicate
                            collaborative relationships rather than timely
                            materials. Progressively foster unique interfaces
                            vis-a-vis backend e-services.
                          </p>
                          <a href="" className="btn btn-primary">
                            READ CANVAS'S STORY
                          </a>
                        </div>
                        <div className="water__content__right"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="map"
                    role="tabpanel"
                    aria-labelledby="map-tab"
                  >
                    <div className="container tab-menu-content">
                      <div className="location__container">
                        <div className="location__content__left"></div>
                        <div className="location__content__right shadow">
                          <h3>We help people to create new Website.</h3>
                          <p>
                            Uniquely productize cross-unit action items with
                            multifunctional imperatives. Quickly communicate
                            collaborative relationships rather than timely
                            materials. Progressively foster unique interfaces
                            vis-a-vis backend e-services.
                          </p>
                          <a href="" className="btn btn-primary">
                            READ CANVAS'S STORY
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
