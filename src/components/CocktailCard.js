import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CocktailCard = ({cocktail}) => {
  return (
    <div className="card cocktailCard">
      <h5 className="card-header cocktailCardHeader">Rating: </h5>
      <div className="card-body">
        <h5 className="card-title">{cocktail.name}</h5>
        <p className="card-text">
          {cocktail.description}
        </p>
        <Link to={`/cocktail/${cocktail.id}`}>
          <Button>View Recipe</Button>
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;
