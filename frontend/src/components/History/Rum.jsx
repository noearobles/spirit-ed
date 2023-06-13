import React from "react";

import { images } from "../Home/constants";
import "./History.css";
const Rum = () => {
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
              Yohoho And a bottle of
            </h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>

          <p className="p__opensans">
            While records of rum can be traced back as far as the 14th century,
            the first distillation of this beverage occurred in the Caribbean.
            If you've ever watched any of the Pirates of the Caribbean movies,
            you're familiar with the wild reputation of rum. In fact, it's
            practically a requirement to use a bit of pirate jargon while
            enjoying this alcoholic drink. The discovery that molasses, obtained
            from sugarcane plantations, could be fermented into alcohol led to
            the distillation process that purified it and gave birth to our
            beloved friend, rum.
          </p>
        </div>
        <div className="app__aboutus-content_knife-history flex__center">
          {/* <img src={images.manhattan} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history-history">
          <div>
            {" "}
            <h1 className="headtext__cormorant-history">Rum</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
          <div className="app__wrapper_img-history">
            <img src={images.rum} alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rum;
