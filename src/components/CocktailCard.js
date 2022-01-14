import React from "react";
import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
  return (
    <Link id={`cocktailCard${cocktail.id}`} to={`/cocktail/${cocktail.id}`} className="cocktailLink">
      <div className="card cocktailCard mb-4">
        <h5 className="card-header cocktailCardHeader">Rating: </h5>
        <div className="card-body">
          <h5 className="card-title">{cocktail.name}</h5>
          <p className="card-text">{cocktail.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CocktailCard;
