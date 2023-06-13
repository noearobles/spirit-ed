import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../Hooks/SearchContext";
import "../Cocktails/Cocktail.css";
import "../../components/SearchBox.css";
import CustomImage from "../Home/CustomImage";
import WineCard from "./WineCard";
import { images } from "../Home/constants";

export default function PreviousWineSearches() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <div style={{ marginBottom: "1rem" }}>
          <div>
            {" "}
            <p className="p__cormorant">A Comprehensive Guide</p>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
        </div>
        <h1 className="app__header-h1">The World of Wine</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Wine is an ancient beverage with a rich history and a complex array of
          flavors, aromas, and textures. Beyond being a mere drink, wine is an
          experience that captivates the senses and brings people together. In
          this comprehensive guide, we will explore the world of wine, covering
          everything from its origins and production methods to wine pairings,
          serving etiquette, and the nuances of tasting and appreciating
          different wines.
        </p>
      </div>

      <div className="app__wrapper_img" style={{ margin: "0", scale: "80%" }}>
        <img src={images.wineRack} alt="header_img" />
      </div>
    </div>
  );
}
