import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Overlay } from "./Overlay";
import { images } from "../constants";
import "./Footer.css";
import { Outlet } from "react-router-dom";

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <Overlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Me</h1>
        <p className="p__opensans">
          <a href="mailto:roblesnoe1030@gmail.com" className="contact__button">
            Email me
          </a>
        </p>
        <p className="p__opensans">
          <a href="tel:956-579-5536" className="contact__button">
            Call me
          </a>
        </p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__nav-h1">Spirit-Ed</h1>{" "}
        <p className="p__opensans">
          &quot;The whole world is about three drinks behind.&quot;
        </p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Hours Availible</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 7:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        &copy; 2023 | Spirit-Ed. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
