import React from "react";

import { images } from "../constants";
import "./SpecialMenu.css";
import Gallery from "../Gallery/Gallery";
import { Outlet } from "react-router-dom";

const SpecialMenu = () => (
  <>
    <div className="app__specialMenu flex__center section__padding" id="drinks">
      <div className="app__specialMenu-title">
        <div style={{ marginBottom: "1rem" }}>
          <div>
            {" "}
            <p className="p__cormorant">Find Your Pallete</p>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
        </div>
        <h1 className="headtext__cormorant">Drinks By Type</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">
            Cocktails, Spirits & Liqueurs, Wine
          </p>
        </div>
        <Gallery />
      </div>

      {/* <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div> */}
      <Outlet />
    </div>
  </>
);

export default SpecialMenu;
