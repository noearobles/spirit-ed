import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomImage from "../Home/CustomImage";
import "./Cocktail.css";

export default function CocktailInstructions(props) {
  const { item } = props;
  const [unit, setUnit] = useState("oz");
  const [convertedMeasures, setConvertedMeasures] = useState([]);

  function getIngredientsAndMeasures(cocktailData) {
    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktailData[`strIngredient${i}`];
      const measure = cocktailData[`strMeasure${i}`];

      if (ingredient !== null && measure !== null) {
        ingredients.push(ingredient);
        measures.push(parseFloat(measure));
      }
    }

    return { ingredients, measures };
  }

  function convertMeasures(measures, unit) {
    const conversionFactors = {
      oz: 1,
      ml: 29.5735,
      cl: 2.95735,
      cups: 0.125,
    };

    return measures.map((measure) => {
      if (unit === "cups") {
        return measure * conversionFactors[unit];
      } else {
        return Math.round(measure * conversionFactors[unit]);
      }
    });
  }

  useEffect(() => {
    const { measures } = getIngredientsAndMeasures(item);
    const convertedMeasures = convertMeasures(measures, unit);
    setConvertedMeasures(convertedMeasures);
  }, [item, unit]);

  const { ingredients } = getIngredientsAndMeasures(item);

  return (
    <div className="app__menuitem card">
      <div className="app__menuitem-name-cK">
        <CustomImage imgSrc={item.strDrinkThumb} wd="50%" />
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {item.strDrink}
        </p>
        <span className="app__menuitem-dash" />
      </div>

      <div className="instructions-container-cocktail">
        <div className="p__opensans instructions" style={{ color: "#AAAAAA" }}>
          <div>
            <label>Measurement Unit:</label>
            <div>
              <button
                id="measure"
                onClick={() => setUnit("oz")}
                className={unit === "oz" ? "active" : ""}
              >
                oz
              </button>
              <button
                id="measure"
                onClick={() => setUnit("ml")}
                className={unit === "ml" ? "active" : ""}
              >
                ml
              </button>
              <button
                id="measure"
                onClick={() => setUnit("cl")}
                className={unit === "cl" ? "active" : ""}
              >
                cl
              </button>
              <button
                id="measure"
                onClick={() => setUnit("cups")}
                className={unit === "cups" ? "active" : ""}
              >
                cups
              </button>
            </div>
          </div>
          <div>
            <ul>
              <h2>Measures</h2>
              {convertedMeasures.map((measure, index) => {
                return (
                  <li key={index}>
                    {measure} {unit}
                  </li>
                );
              })}
            </ul>
            <ul>
              <h2>Ingredients</h2>
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    <Link to={`/ingredients/${ingredient}`} className="ing-btn">
                      {ingredient}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p className="p__cormorant">How to Make: {item.strInstructions}</p>
      </div>
    </div>
  );
}
