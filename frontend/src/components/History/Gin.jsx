import React from "react";

import { images } from "../Home/constants";
import "./History.css";
const Gin = () => {
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
            <h1 className="headtext__cormorant-history">Gincident</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>

          <p className="p__opensans">
            Gin originated in Holland, where it was initially created by
            physician Franciscus Sylvius as a medicinal remedy. It was dispensed
            in pharmacies and reputedly provided relief for kidney and stomach
            ailments, gallstones, and gout. The juniper berry, the key
            ingredient in gin, was believed to possess medicinal properties,
            contributing to its widespread appeal. Gin experienced a significant
            surge in popularity during the 17th century in England, particularly
            during the reign of William of Orange, leading to a period known as
            the "Gin Craze." This delightful concoction infused with juniper
            berries continues to be enjoyed in copious amounts. How about a
            refreshing gin and tonic?
          </p>
        </div>
        <div className="app__aboutus-content_knife-history flex__center">
          {/* <img src={images.manhattan} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history-history">
          <div>
            {" "}
            <h1 className="headtext__cormorant-history">Gin</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
          <div className="app__wrapper_img-history">
            <img src={images.gin} alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gin;
