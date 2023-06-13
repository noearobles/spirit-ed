import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const MY_KEY = import.meta.env.VITE_API_KEY;

const getAllCocktailsURL = `https://www.thecocktaildb.com/api/json/v2/${MY_KEY}/search.php?s=`;

const getAllIngredientsURL = `https://www.thecocktaildb.com/api/json/v2/${MY_KEY}/list.php?i=list`;

const fetchCocktail = async (id) => {
  const { data } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/${MY_KEY}/lookup.php?i=${id}`
  );
  return data;
};

export const FetchSingleCocktail = (id) => {
  return useQuery(["cocktail", id], () => fetchCocktail(id));
};
const namedCocktail = async (name) => {
  const { data } = await axios.get(`${getAllCocktailsURL`${name}`}`);
  return data;
};
export const FetchNamedCocktail = (name) => {
  return useQuery(["singleCocktail", name], () => namedCocktail(name));
};

const fetchIngredient = async (ingName) => {
  const { data } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/${MY_KEY}/search.php?i=${ingName}`
  );
  return data;
};

export const FetchSingleIngredient = (ingName) => {
  return useQuery(["ingredient", ingName], () => fetchIngredient(ingName));
};

export const FetchCocktails = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cocktails"],
    queryFn: async () => {
      const { data } = await axios.get(getAllCocktailsURL);

      return data;
    },
    staleTime: 600000,
  });
};

export const FetchIngredients = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ingredients"],
    queryFn: async () => {
      const { data } = await axios.get(getAllIngredientsURL);

      return data;
    },
    staleTime: 600000,
  });
};
