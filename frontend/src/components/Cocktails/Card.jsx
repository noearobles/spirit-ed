import CustomImage from "../Home/CustomImage";
import { Link } from "react-router-dom";
import "./Cocktail.css";

import { RingLoader } from "react-spinners";
export default function Card(props) {
  const { data, isLoading, isError } = props;

  return (
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
      ) : data ? (
        data.drinks.map((item) => (
          <div key={item.idDrink} className="app__menuitem-head">
            <CustomImage imgSrc={item.strDrinkThumb} wd="80%" />
            <div className="app__menuitem-name-cK">
              <div>
                <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                  {item.strDrink}
                </p>
                <div className="app__menuitem-dash" />
              </div>
            </div>

            <div className="app__menuitem-price-cocktail">
              <p className="p__cormorant">
                <Link to={`/cocktails/${item.strDrink}`} className="view-btn">
                  View {`${item.strDrink}`} Recipe
                </Link>
              </p>
              <div className="app__menuitem-sub-cocktail">
                <p className="p__opensans" style={{ color: "#AAAAAA" }}>
                  <b>Contains: </b>
                  <Link
                    to={`/ingredients/${item.strIngredient1}`}
                    className="view-ing"
                  >
                    {item.strIngredient1}
                  </Link>
                  <br />
                  <b>Type:</b> {item.strCategory}
                  <br />
                  <b>Drink:</b> {item.strAlcoholic}
                  <br />
                  <b>Glass:</b> {item.strGlass}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>Error: {`${isError.message}`}</h1>
      )}
    </div>
  );
}
