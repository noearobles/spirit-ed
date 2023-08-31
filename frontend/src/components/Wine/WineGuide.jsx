import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { images } from "../Home/constants";
import "../Wine/Wine.css";
import { Link, useLocation } from "react-router-dom";
import { wineGuideData } from "./WineData";
import CustomImage from "../Home/CustomImage";
const WineGuide = () => {
  const scrollRef = React.useRef(null);
  const location = useLocation();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollBy({
        left: -current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      current.scrollBy({
        left: current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app__gallery-history flex__center">
      <div className="app__gallery-images-history">
        <div className="app__gallery-images_container-history" ref={scrollRef}>
          {wineGuideData.sections.map((section, index) => (
            <div
              className="app__gallery-images_card-wine flex__center"
              key={`section-${index}`}
            >
              {section.subsections.map((subsection, subIndex) => (
                <div key={`subsection-${index}-${subIndex}`}>
                  <div
                    className="app__aboutus-wine app__bg flex__center section__padding"
                    id="about"
                  >
                    <div className="app__aboutus-overlay-history flex__center">
                      {/* <img src={images.manhattan} alt="G_overlay" /> */}
                    </div>

                    <div className="app__aboutus-content-wine flex__center">
                      <div className="app__aboutus-content_about-wine">
                        <div>
                          {" "}
                          <p className="p__cormorant">{section.title}</p>
                          <div
                            className="app__menuitem-dash"
                            style={{ marginBottom: "1rem", width: "100%" }}
                          />
                        </div>
                        <div>
                          {" "}
                          <h1 className="headtext__cormorant-history">
                            {subsection.title}
                          </h1>
                          <div
                            className="app__menuitem-dash"
                            style={{ marginBottom: "1rem", width: "100%" }}
                          />
                        </div>

                        <p className="p__opensans">{subsection.content}</p>
                      </div>

                      <div className="app__aboutus-content_history-wine">
                        <div className="app__aboutus-content_history-wine">
                          {" "}
                          <CustomImage wd={"80%"} imgSrc={section.image} />
                          {/* <div className="app__wrapper_img-wine">
                          <img src={section.image} alt="header_img" />
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows-wine">
          <BsArrowLeftShort
            className="gallery__arrow-icon-history"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon-history"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default WineGuide;
