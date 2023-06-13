import React from "react";

import { images } from "../Home/constants";
import "./History.css";

export default function HistoryHeader() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <div style={{ marginBottom: "1rem" }}>
          <div>
            {" "}
            <p className="p__cormorant">Class is in Session</p>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
        </div>
        <h1 className="app__header-h1">History</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Just down below is a slide of historical infromation that dives into
          the tapestry of the intoxicating origins of alcohol.
        </p>
      </div>

      <div className="app__wrapper_img" style={{ margin: "0" }}>
        <img src={images.tequila} alt="header_img" />
      </div>
    </div>
  );
}
