import React from "react";

import { images } from "../Home/constants";
import "./History.css";
const Wine = () => {
  return (
    <div
      className="app__aboutus-history app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay-history flex__center">
        {/* <img src={images.manhattan} alt="G_overlay" /> */}
      </div>

      <div className="app__aboutus-content-history flex__center">
        <div className="app__aboutus-content_about-history">
          <div>
            {" "}
            <h1 className="headtext__cormorant-history">Most Popular</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>

          <p className="p__opensans">
            The origins of wine and beer, two highly popular alcoholic beverages
            worldwide, can be traced back to ancient times. Abundant evidence
            reveals their early existence throughout various regions. Wine,
            derived from grapes, and beer, crafted with barley, have both been
            rooted in human history since the B.C. era, with strong connections
            to the Zagros Mountains in Iran.
          </p>
        </div>
        <div className="app__aboutus-content_knife-history flex__center">
          {/* <img src={images.manhattan} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history-history">
          <div>
            {" "}
            <h1 className="headtext__cormorant-history">Beer and Wine</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
          <div className="app__wrapper_img-history">
            <img src={images.bAndW} alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wine;
