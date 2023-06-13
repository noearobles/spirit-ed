import SearchContext from "../Hooks/SearchContext";
import { useQuery } from "@tanstack/react-query";
import { FetchIngredients } from "../../api/cocktailDb";
import React from "react";
import IngredientSearches from "./IngredientSearches";
import "../../App.css";
export default function Ingredients() {
  const { data, isLoading, isError } = useQuery(
    ["ingredients"],
    FetchIngredients()
  );

  const [searches, setSearches] = React.useState([]);

  function loadSearches() {
    const storedSearches = localStorage.getItem("searches");
    if (storedSearches) {
      setSearches(JSON.parse(storedSearches));
    }
  }

  function clearSearches() {
    setSearches([]);
    localStorage.removeItem("searches");
  }

  return (
    <SearchContext.Provider
      value={{ searches, setSearches, clearSearches, loadSearches }}
    >
      {" "}
      <div className="ingredientsBg">
        <IngredientSearches
          data={data}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </SearchContext.Provider>
  );
}
