import { Link } from "react-router-dom";
import CustomImage from "../Home/CustomImage";
import "../Cocktails/Cocktail.css";

import { RingLoader } from "react-spinners";
export default function IngCard(props) {
  const { data, isLoading, isError } = props;

  return (
    <>
      <div id="ckCard" className="app__menuitem">
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
        ) : isError ? (
          <h1>Error: {`${isError.message}`}</h1>
        ) : (
          data &&
          data.drinks.map((item) => (
            <div key={item.idIngredient} className="app__menuitem-head">
              <CustomImage
                wd={"80%"}
                imgSrc={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`}
              />
              <div className="app__menuitem-name-cK">
                <div>
                  <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                    {item.strIngredient1}
                  </p>
                  <div className="app__menuitem-dash" />
                </div>
              </div>

              <div className="app__menuitem-price-cocktail">
                <p className="p__cormorant">
                  <Link
                    to={`/ingredients/${item.strIngredient1}`}
                    className="view-btn"
                  >
                    View {`${item.strIngredient1}`} Info
                  </Link>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
