import React from "react";

import { images } from "../Home/constants";
import "./History.css";
const Tequila = () => {
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
            <h1 className="headtext__cormorant-history">¿te gusta?</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>

          <p className="p__opensans">
            Tequila, derived from the blue agave plant, is believed to have
            originated in what is now known as the city of Tequila in Mexico,
            even before it was officially recognized as a city. The Aztec
            civilization had also been documented as fermenting alcohol from the
            agave plant, dating back even earlier. The mass production of this
            distilled spirit began around 1600 in the region that is now
            modern-day Jalisco. Presently, tequila is categorized into three
            distinct types: blanco, which refers to un-aged tequila, Reposado,
            which undergoes aging in barrels for 2-12 months, and Anejo, which
            is aged for 1-3 years.
          </p>
        </div>
        <div className="app__aboutus-content_knife-history flex__center">
          {/* <img src={images.manhattan} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history-history">
          <div>
            {" "}
            <h1 className="headtext__cormorant-history">Tequila</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
          <div className="app__wrapper_img-history">
            <img src={images.agave} alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tequila;
