import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useSearchContext } from "../Hooks/SearchContext";
import "./Cocktail.css";
import "../../components/SearchBox.css";
import CustomImage from "../Home/CustomImage";
export default function PreviousCocktailSearches(props) {
  const { data, isLoading, isError } = props;

  const [filteredData, setFilteredData] = React.useState([]);
  const { searches, setSearches, clearSearches, loadSearches } =
    useSearchContext();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const searchContext = useSearchContext();

  React.useEffect(() => {
    loadSearches();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      // Ignore empty search terms
      return;
    }
    if (
      !filteredData.some(
        (item) => item.strDrink.toLowerCase() === searchTerm.toLowerCase()
      )
    ) {
      return;
    }
    setSearches((prevSearches) => {
      const newSearches = [...prevSearches, searchTerm];
      localStorage.setItem("cocktailSearches", JSON.stringify(newSearches));
      return newSearches;
    });
  };
  function clearSearchesLocalStorage() {
    setInputValue("");
    setSearches([]);
    localStorage.removeItem("cocktailSearches");
  }

  function handleFilter(e) {
    setSearchTerm(e.target.value);
    setInputValue(e.target.value);
    const searchText = e.target.value.toLowerCase().trim();

    if (!searchText) {
      setFilteredData([]);
      return;
    }

    const filteredDrinks = data.drinks.filter((item) =>
      item.strDrink.toLowerCase().includes(searchText)
    );
    const filteredIngredients = data.drinks.filter((item) =>
      item.strIngredient1.toLowerCase().includes(searchText)
    );

    setFilteredData([...filteredDrinks, ...filteredIngredients]);
  }

  return (
    <>
      <div className="app__newsletter-drinks">
        <div className="app__newsletter-heading">
          {searches.length ? (
            <h2 className="headtext__cormorant">Previous Searches</h2>
          ) : (
            ""
          )}

          {searchContext.searches.map((search, index) => (
            <div
              key={index}
              className="search-item-drinks"
              style={{ animationDelay: index * 0.1 + "s" }}
            >
              <Link to={`${search}`} className="view-btn-drinks">
                {search},
              </Link>
            </div>
          ))}
        </div>
        <div
          className={
            searches.length ? "search-box-active-drinks" : "search-box"
          }
        >
          <div className="app__newsletter-input-drinks flex__center">
            {" "}
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleFilter}
                type="text"
                value={inputValue}
                placeholder="Search Cocktails ..."
              />
              <button type="submit" className="btn-drinks">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>{" "}
            <div className="history">
              {searches.length ? (
                <span className="p__opensans">Clear History</span>
              ) : (
                ""
              )}
              {searches.length ? (
                <button className="clr" onClick={clearSearchesLocalStorage}>
                  <FontAwesomeIcon icon={faX} />
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {filteredData.length ? (
        <div className="app__menuitem">
          {filteredData.map((item, index) => (
            <div key={index} className="app__menuitem-head">
              <CustomImage imgSrc={item.strDrinkThumb} wd="80%" />
              <div className="app__menuitem-name-cK">
                <div>
                  <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                    {item.strDrink}
                  </p>
                  <div className="app__menuitem-dash" />
                </div>
              </div>

              <div className="app__menuitem-price">
                <p className="p__cormorant">
                  <Link to={`/cocktails/${item.strDrink}`} className="view-btn">
                    View {`${item.strDrink}`} Recipe
                  </Link>
                </p>
                <div className="app__menuitem-sub">
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
          ))}
        </div>
      ) : (
        <Card data={data} isLoading={isLoading} isError={isError} />
      )}
    </>
  );
}
