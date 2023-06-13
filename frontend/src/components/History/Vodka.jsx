import React from "react";

import { images } from "../Home/constants";
import "./History.css";
const Vodka = () => {
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
            <h1 className="headtext__cormorant-history">Martini Medicine</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>

          <p className="p__opensans">
            The history of vodka has sparked intense debates among scholars
            within the realm of alcoholic beverages. The general consensus
            points to its Eastern European origins, specifically tracing back to
            either Poland in the 8th century or Russia in the 9th century. In
            its early years, vodka served a distinct purpose and underwent
            notable changes compared to its present-day form. Originally
            utilized solely as a medicinal remedy, its flavor and even color
            differed significantly from what we enjoy today in cocktails like
            martinis and White Russians. Nevertheless, we appreciate vodka in
            all its variations and forms.
          </p>
        </div>
        <div className="app__aboutus-content_knife-history flex__center">
          {/* <img src={images.manhattan} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history-history">
          <div>
            {" "}
            <h1 className="headtext__cormorant-history">Vodka</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
          <div className="app__wrapper_img-history">
            <img src={images.vodka} alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vodka;
