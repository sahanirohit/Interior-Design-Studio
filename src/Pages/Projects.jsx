import React from "react";

export default function Projects() {
  return (
    <>
      <div className="container-fluid">
        <div className="main_heading">
          <h1>Projects</h1>
          <p>Home / Projects</p>
        </div>
      </div>
      <div className="project_heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1>OUR LATEST PROJECTS</h1>
              <p>
                Competently benchmark backward-compatible technologies vis-a-vis
                parallel convergence. Rapidiously innovate stand-alone.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <p>
                Progressively strategize clicks-and-mortar deliverables and
                turnkey value. Enthusiastically actualize granular products
                whereas excellent total linkage. Distinctively matrix equity
                invested opportunities rather than cross-unit alignments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container min-vh-100 gallery">
        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col">
            <img
              src={require("../images/1.jpg")}
              className="img-fluid"
              alt="1"
            />
          </div>
          <div className="col">
            <img
              src={require("../images/2.jpg")}
              className="img-fluid"
              alt="2"
            />
          </div>
          <div className="col">
            <img
              src={require("../images/3.jpg")}
              className="img-fluid"
              alt="3"
            />
          </div>
          <div className="col">
            <img
              src={require("../images/4.jpg")}
              className="img-fluid"
              alt="4"
            />
          </div>
          <div className="col">
            <img
              src={require("../images/5.jpg")}
              className="img-fluid"
              alt="5"
            />
          </div>
          <div className="col">
            <img
              src={require("../images/6.jpg")}
              className="img-fluid"
              alt="6"
            />
          </div>
        </div>
      </div>
    </>
  );
}
