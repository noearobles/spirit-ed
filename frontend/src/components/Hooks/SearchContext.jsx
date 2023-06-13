import React from "react";

const SearchContext = React.createContext();

export default SearchContext;

export function useSearchContext() {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContext.Provider"
    );
  }
  return context;
}
