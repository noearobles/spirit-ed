import React from "react";

import { images } from "../Home/constants";
import "./History.css";
const Whiskey = () => {
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
            <h1 className="headtext__cormorant-history">Water Of Life</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>

          <p className="p__opensans">
            Whiskey, or whisky depending on the region, is commonly believed to
            have originated in Scotland. However, the first documented evidence
            traces back to Ireland in 1405, where it was referred to as "aqua
            vitae," meaning "water of life." So, the next time you order a
            whiskey, you can proudly inform others that you're enjoying the
            water of life, impressing them with your extensive knowledge of
            spirits. The process of distilling whiskey is quite similar to that
            of vodka. However, the aging process in barrels imparts unique
            flavors and colors to whiskey. The enduring popularity of whiskey is
            evident through its four main variations: bourbon, scotch, rye, and
            Irish, each produced in distinct geographical locations and
            possessing its own distinct set of characteristics.
          </p>
        </div>
        <div className="app__aboutus-content_knife-history flex__center">
          {/* <img src={images.manhattan} alt="about_knife" /> */}
        </div>
        <div className="app__aboutus-content_history-history">
          <div>
            {" "}
            <h1 className="headtext__cormorant-history">Whiskey</h1>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
          <div className="app__wrapper_img-history">
            <img src={images.whiskey} alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whiskey;
