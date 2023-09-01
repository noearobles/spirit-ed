import React from "react";

import { images } from "../constants";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.manhattan} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <div>
          {" "}
          <h1 className="headtext__cormorant">About Spirit-Ed</h1>
          <div
            className="app__menuitem-dash"
            style={{ marginBottom: "1rem", width: "100%" }}
          />
        </div>
        <p className="p__opensans">
          Whether you're a passionate enthusiast, a curious connoisseur, or a
          professional in the vibrant food and beverage industry, this platform
          is designed to take you on an enlightening journey through the rich
          tapestry of global libations. Discover the fascinating stories behind
          legendary spirits, liqueurs, wines, and the countless ingredients that
          combine to create unique and tantalizing concoctions.
        </p>
        <Link to={"/history"}>
          <button type="button" className="custom__button">
            Read History
          </button>
        </Link>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.bubbles} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <div>
          {" "}
          <h1 className="headtext__cormorant">The Purpose</h1>
          <div
            className="app__menuitem-dash"
            style={{ marginBottom: "1rem", width: "100%" }}
          />
        </div>
        <p className="p__opensans">
          {" "}
          From ancient traditions to modern innovations, Spirit-Ed serves as a
          comprehensive resource, empowering you to expand your knowledge, spark
          your creativity, and embark on thrilling adventures in mixology.
          Unleash your imagination and uncover the secrets of the world's most
          cherished elixirs, all from the comfort of your own home or
          establishment.
        </p>
        <Link to={"/drinks"}>
          <button type="button" className="custom__button">
            Learn Drinks
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;
