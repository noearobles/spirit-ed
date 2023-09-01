import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { images } from "../constants";
import "./Gallery.css";
import { Link, useLocation } from "react-router-dom";

const Gallery = () => {
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
  const galleryItems = [
    {
      image: images.gallery03,
      name: "Cocktail Recipe Database",
      path: "/cocktails",
    },
    {
      image: images.ingredients,
      name: "Spirits & Ingredients",
      path: "/ingredients",
    },
    {
      image: images.rosePour,
      name: "Wine Knowledge & Wine Identifier",
      path: "/wine",
    },
  ];
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryItems.map((item, index) => (
            <Link
              to={item.path}
              key={item.name}
              onClick={() => {
                window.location.href = `${item.path}`;
              }}
            >
              {" "}
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                {" "}
                <img src={item.image} alt="gallery_image" />
                <p
                  className="gallery__image-icon"
                  style={{ textAlign: "center" }}
                >
                  {item.name}
                </p>
              </div>{" "}
            </Link>
          ))}
        </div>
      </div>{" "}
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort
          className="gallery__arrow-icon"
          onClick={() => scroll("left")}
        />
        <BsArrowRightShort
          className="gallery__arrow-icon"
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
};

export default Gallery;
