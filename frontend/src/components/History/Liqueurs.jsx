import React from "react";

import { images } from "../Home/constants";
import "./History.css";
const Liqueurs = () => {
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
            <h1 className="headtext__cormorant-history">
              Luxury and Decadence
            </h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>

          <p className="p__opensans">
            Liqueurs have a captivating history rooted in medieval Europe, where
            monks and herbalists crafted these indulgent spirits within the
            confines of monasteries. Infusing herbs, fruits, spices, and flowers
            into distilled spirits, they created elixirs known for their
            exquisite flavors and medicinal qualities. As their popularity
            spread, skilled artisans outside the religious orders joined the
            liqueur-making tradition, resulting in a wide range of flavors and
            styles. Today, liqueurs offer a touch of luxury, whether enjoyed on
            their own or as a key ingredient in cocktails, carrying with them
            the legacy of ancient herbalists, devoted monks, and visionary
            artisans who transformed humble ingredients into liquid works of
            art.
          </p>
        </div>
        <div className="app__aboutus-content_knife-history flex__center">
          {/* <img src={images.manhattan} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history-history">
          <div>
            {" "}
            <h1 className="headtext__cormorant-history">Liqueurs</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
          <div className="app__wrapper_img-history">
            <img src={images.liqueurs} alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Liqueurs;
