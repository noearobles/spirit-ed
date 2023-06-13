import { Link } from "react-router-dom";
import CustomImage from "../Home/CustomImage";
import "../Cocktails/Cocktail.css";

export default function WineCard(props) {
  const { data, isLoading, isError, status } = props;

  return (
    <>
      <div className="recipes-container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : data ? (
          data.drinks.map((item) => {
            return (
              <div key={index} className="app__menuitem-head">
                <CustomImage imgSrc={item.strDrinkThumb} pt="50%" />
                <div className="app__menuitem-name-cK">
                  <div>
                    <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                      {item.wine}
                    </p>
                    <div className="app__menuitem-dash" />
                  </div>
                </div>

                <div className="app__menuitem-price">
                  {/* <p className="p__cormorant">
                    <Link to={`/cocktails/${item.idDrink}`} className="view-btn">
                      View {`${item.strDrink}`} Recipe
                    </Link>
                  </p> */}
                  <div className="app__menuitem-sub">
                    <p className="p__opensans" style={{ color: "#AAAAAA" }}>
                      <b>Winery:</b> {item.winery}
                      <br />
                      <b>Wine:</b> {item.wine}
                      <br />
                      <b>Location:</b> {item.location}
                      <br />{" "}
                      <a
                        href={`https://www.google.com/search?q=${item.wine}`}
                        target="_blank"
                      >
                        Learn more here!
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Error: {`${isError.message}`}</h1>
        )}
      </div>
    </>
  );
}
