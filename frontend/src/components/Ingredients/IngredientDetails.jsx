import { FetchSingleIngredient } from "../../api/cocktailDb";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CustomImage from "../Home/CustomImage";

import { RingLoader } from "react-spinners";

export default function IngredientDetails() {
  const { ingName } = useParams();
  const { data, isLoading, isError } = useQuery(
    ["ingredient", ingName],
    FetchSingleIngredient(ingName)
  );
  return (
    <>
      <div
        className="app__menuitem card"
        style={{ height: "unset", paddingTop1: "1em" }}
      >
        {isLoading ? (
          <div className="loader">
            {" "}
            <RingLoader
              color={"#DCCA87"}
              loading={isLoading}
              size={150}
              speedMultiplier={1}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : data ? (
          data.ingredients.map((item) => {
            return (
              <>
                <div className="app__menuitem-name-cK">
                  <CustomImage
                    wd="50%"
                    imgSrc={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient}.png`}
                  />
                  <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                    {item.strIngredient}
                  </p>
                  <span className="app__menuitem-dash" />
                </div>

                <div
                  className="instructions-container-cocktail"
                  style={{ width: "100%" }}
                >
                  <div className="p__opensans" style={{ color: "#AAAAAA" }}>
                    {item.strDescription === null ? (
                      <>
                        <p className="p__cormorant">No Description Availible</p>
                        <br />{" "}
                        <a
                          href={`https://www.google.com/search?q=${item.strIngredient}`}
                          target="_blank"
                        >
                          Try here!
                        </a>
                      </>
                    ) : (
                      <p className="p__cormorant">{item.strDescription}</p>
                    )}
                  </div>
                </div>
              </>
            );
          })
        ) : null}
      </div>
    </>
  );
}
