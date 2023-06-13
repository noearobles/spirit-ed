import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "./History.css";
import Mead from "./Mead";
import Wine from "./Wine";
import Vodka from "./Vodka";
import Whiskey from "./Whiskey";
import Tequila from "./Tequila";
import Gin from "./Gin";
import Rum from "./Rum";
import Liqueurs from "./Liqueurs";

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
  const [galleryItems, setGalleryItems] = React.useState([]);

  React.useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        setTimeout(() => {
          const data = [
            <Mead />,
            <Wine />,
            <Vodka />,
            <Whiskey />,
            <Tequila />,
            <Gin />,
            <Rum />,
            <Liqueurs />,
          ];
          setGalleryItems(data);
        }, 1000);
      } catch (error) {
        console.error("Error fetching gallery items:", error);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <div className="app__gallery-history flex__center">
      <div className="app__gallery-images-history">
        <div className="app__gallery-images_container-history" ref={scrollRef}>
          {galleryItems.map((item, index) => (
            <div
              className="app__gallery-images_card-history flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <div>{item}</div>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows-history">
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
