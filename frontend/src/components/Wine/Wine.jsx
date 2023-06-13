// import SearchContext from "../../components/Hooks/SearchContext";
// import { useQuery } from "@tanstack/react-query";
// import { fetchWines } from "../../api/cocktailDb";
import React from "react";
import "../../App.css";
import PreviousWineSearches from "./PreviousWineSearches";
import WineGuide from "./WineGuide";
import WineRecognition from "./WineRecognition";
export default function Wine() {
  // const { data, isLoading, isError, status } = useQuery(
  //   ["combinedWines"],
  //   fetchWines,
  //   { staleTime: 600000 }
  // );

  // const [searches, setSearches] = React.useState([]);

  // function loadSearches() {
  //   const storedSearches = localStorage.getItem("wineSearches");
  //   if (storedSearches) {
  //     setSearches(JSON.parse(storedSearches));
  //   }
  // }

  // function clearSearches() {
  //   setSearches([]);
  //   localStorage.removeItem("wineSearches");
  // }

  return (
    // <SearchContext.Provider
    //   value={{ searches, setSearches, clearSearches, loadSearches }}
    // >
    <>
      <PreviousWineSearches />
      <WineGuide />
      <WineRecognition />
    </>
    // </SearchContext.Provider>
  );
}
