import PreviousCocktailSearches from "./PreviousCocktailSearches";
import SearchContext from "../Hooks/SearchContext";
import { useQuery } from "@tanstack/react-query";
import { FetchCocktails } from "../../api/cocktailDb";
import React from "react";
import "../../App.css";
export default function Cocktails() {
  const { data, isLoading, isError } = useQuery(
    ["cocktails"],
    FetchCocktails()
  );

  const [searches, setSearches] = React.useState([]);

  function loadSearches() {
    const storedSearches = localStorage.getItem("cocktailSearches");
    if (storedSearches) {
      setSearches(JSON.parse(storedSearches));
    }
  }

  function clearSearches() {
    setSearches([]);
    localStorage.removeItem("cocktailsearches");
  }

  return (
    <SearchContext.Provider
      value={{ searches, setSearches, clearSearches, loadSearches }}
    >
      <div className="cocktailsBg">
        <PreviousCocktailSearches
          data={data}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </SearchContext.Provider>
  );
}
