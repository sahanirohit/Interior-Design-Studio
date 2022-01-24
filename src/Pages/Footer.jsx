import React from "react";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer__bg">
        <div className="container">
          <div className="row footer__row">
            <div className="col-lg-3 col-md-3 col-sm-3 mx-auto footer__col">
              <a className="navbar-brand" href="#">
                <img src="../images/logo.png" width="120px" alt="logo" />
              </a>
              <p>@2022</p>
              <hr className="footer_hr" />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Get the app
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Download for Android
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Download for IOS
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 mx-auto footer__col">
              <p>Blogroll</p>
              <ul className="navbar-nav">
                <li className="nav-items">
                  <a href="" className="nav-link">
                    Documentation
                  </a>
                </li>
                <li className="nav-items">
                  <a href="" className="nav-link">
                    Feedback
                  </a>
                </li>
                <li className="nav-items">
                  <a href="" className="nav-link">
                    Plugins
                  </a>
                </li>
                <li className="nav-items">
                  <a href="" className="nav-link">
                    Support Forums
                  </a>
                </li>
                <li className="nav-items">
                  <a href="" className="nav-link">
                    Themes
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 mx-auto footer__col">
              <p>Links</p>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Licence
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Forums
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 mx-auto footer__col">
              <p>Twitter Feed</p>
              <div className="footer__post">
                <span>
                  <FaTwitter className="footer__icons" />
                  The water is crystal clear - sea for yourself! Fun @photoshop
                  manipulation by @jose_Francese and made with @example.com
                </span>
              </div>
              <br />
              <div className="footer__post">
                <span>
                  <FaTwitter className="footer__icons" />
                  The water is crystal clear - sea for yourself! Fun @photoshop
                  manipulation by @jose_Francese and made with @example.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
