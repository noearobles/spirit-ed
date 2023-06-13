import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import IngCard from "./IngCard";
import { Link } from "react-router-dom";
import { useSearchContext } from "../Hooks/SearchContext";
import CustomImage from "../Home/CustomImage";
export default function IngredientSearches(props) {
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
        (item) => item.strIngredient1.toLowerCase() === searchTerm.toLowerCase()
      )
    ) {
      return;
    }
    setSearches((prevSearches) => {
      const newSearches = [...prevSearches, searchTerm];
      localStorage.setItem("searches", JSON.stringify(newSearches));
      return newSearches;
    });
  };
  function clearSearchesLocalStorage() {
    setInputValue("");
    setSearches([]);
    localStorage.removeItem("searches");
  }

  function handleFilter(e) {
    setSearchTerm(e.target.value);
    setInputValue(e.target.value);
    const searchText = e.target.value.toLowerCase().trim();

    if (!searchText) {
      setFilteredData([]);
      return;
    }

    const filtered = data.drinks.filter((item) =>
      item.strIngredient1.toLowerCase().includes(searchText)
    );

    setFilteredData(filtered);
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
                placeholder="Search Ingredients ..."
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
        <div className="recipes-container">
          {filteredData.map((item, index) => (
            <div key={index} className="app__menuitem-head">
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
          ))}
        </div>
      ) : (
        <IngCard data={data} isLoading={isLoading} isError={isError} />
      )}
    </>
  );
}
