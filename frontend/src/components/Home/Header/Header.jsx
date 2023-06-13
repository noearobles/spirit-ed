import React from "react";

import { images } from "../constants";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <div style={{ marginBottom: "1rem" }}>
        <div>
          {" "}
          <p className="p__cormorant">Chase The Knowledge</p>
          <div
            className="app__menuitem-dash"
            style={{ marginBottom: "1rem", width: "100%" }}
          />
        </div>
      </div>
      <h1 className="app__header-h1">The Artistry of Alcohol</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to Spirit-Ed, a web app dedicated to exploring the captivating
        history and diverse world of alcohol.{" "}
      </p>
      <Link to={"history"}>
        <button type="button" className="custom__button">
          Explore History
        </button>
      </Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="header_img" />
    </div>
  </div>
);

export default Header;
