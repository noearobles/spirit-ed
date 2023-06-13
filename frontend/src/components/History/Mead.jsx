import React from "react";

import { images } from "../Home/constants";
import "./History.css";
const Mead = () => {
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
            <h1 className="headtext__cormorant-history">
              {" "}
              From the days of the first songs
            </h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>

          <p className="p__opensans">
            The origin of mead marks the beginning of alcohol's history, widely
            regarded as the forefather of all fermented beverages. Combining
            yeast, honey, and water, this straightforward alcoholic concoction
            has been savored by nobility, immortalized in timeless literature,
            and hailed as a divine elixir. With its existence spanning countless
            millennia and potentially being the oldest alcoholic drink in
            existence, mead continues to be enjoyed by people today,
            experiencing a remarkable resurgence in popularity. In the United
            States alone, there are nearly 250 meaderies, demonstrating the
            enduring appeal of this heavenly nectar.
          </p>
        </div>
        <div className="app__aboutus-content_knife-history flex__center">
          {/* <img src={images.manhattan} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history-history">
          <div>
            <h1 className="headtext__cormorant-history">Mead </h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
          <div className="app__wrapper_img-history">
            <img src={images.mead} style={{}} alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mead;
