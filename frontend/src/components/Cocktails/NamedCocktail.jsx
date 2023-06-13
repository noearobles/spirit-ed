import { FetchNamedCocktail } from "../../api/cocktailDb";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CocktailInstructions from "./CocktailInstructions";

import { RingLoader } from "react-spinners";
export default function NamedCocktail() {
  const { name } = useParams();

  const { data, isLoading, isError } = useQuery(
    ["singleCocktail", name],
    FetchNamedCocktail(name)
  );

  return (
    <div>
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
        data.drinks.map((item) => {
          return (
            <CocktailInstructions
              key={item.idDrink || item.strDrink}
              item={item}
            />
          );
        })
      ) : (
        <h1>Error: {`${isError.message}`}</h1>
      )}
    </div>
  );
}
