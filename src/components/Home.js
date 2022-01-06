import React from "react";
import CocktailList from "./ViewLists/CocktailList";

const Home = () => {
  return (
    <div className="contentContainer">
        <h1>Cocktail Recipes</h1>
      <CocktailList />
    </div>
  );
};

export default Home;
