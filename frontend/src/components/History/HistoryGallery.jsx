import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "./History.css";
import { historyData } from "./HistoryData";
import CustomImage from "../Home/CustomImage";
const HistoryGallery = () => {
  const scrollRef = React.useRef(null);

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
          {historyData.sections.map((section, index) => (
            <div
              className="app__gallery-images_card-wine flex__center"
              key={`section-${index}`}
            >
              {section.subsections.map((subsection, subIndex) => (
                <div key={`subsection-${index}-${subIndex}`}>
                  <div className="app__aboutus-wine app__bg  section__padding">
                    <div className="flex__center" id="about">
                      <div className="app__aboutus-content_about-wine">
                        <div>
                          {" "}
                          <p className="p__cormorant">{section.title}</p>{" "}
                          <h1
                            className="headtext__cormorant-history"
                            style={{ paddingLeft: "1em" }}
                          >
                            {subsection.title}
                          </h1>
                          <div
                            className="app__menuitem-dash"
                            style={{ marginBottom: "1rem", width: "100%" }}
                          />
                        </div>
                        <div>
                          {" "}
                          <div
                            className="app__menuitem-dash"
                            style={{ marginBottom: "1rem", width: "100%" }}
                          />
                        </div>

                        <p className="p__opensans">{subsection.content}</p>
                      </div>

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

export default HistoryGallery;
