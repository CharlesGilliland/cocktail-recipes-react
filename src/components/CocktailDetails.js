import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Instruction from "./Instruction";

const COCKTAIL = {
  instructions: [
    {
      ingredients: [],
      equipment: [],
      description: "Get the lowball glass.",
      id: 13,
      glass: 4,
      garnish: null,
    },
    {
      ingredients: [
        {
          name: "jack daniel's",
          type: "whiskey",
          abv: 40.0,
          storage: "ambient",
          description: "Some Jack Daniel's brand whiskey.",
          id: 8,
        },
        {
          name: "coca cola",
          type: "coke",
          abv: 0.0,
          storage: "ambient",
          description: "Coca Cola brand coke.",
          id: 14,
        },
      ],
      equipment: [],
      description: "Add the whiskey and coke",
      id: 14,
      glass: null,
      garnish: null,
    },
    {
      ingredients: [
        {
          name: "ice",
          type: "ice",
          abv: 0.0,
          storage: "frozen",
          description: "Some ice.",
          id: 28,
        },
      ],
      equipment: [],
      description: "Add ice and stir.",
      id: 15,
      glass: null,
      garnish: null,
    },
  ],
  name: "Single Whiskey and Coke",
  description: "A shot of whiskey mixed with coke and ice.",
  noOfSteps: 3,
  id: 6,
};

const CocktailDetails = (props) => {
  const { id } = useParams();
  const url = "http://" + process.env.REACT_APP_API_IP + ":8080/cocktail/getCocktail?id=" + id;
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCocktail(response.data);
    });
  }, []);

  if (!cocktail) return <h1>Loading Cocktails...</h1>;

  return (
    <div className="container">
      <h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
      {cocktail.instructions.map((instruction) => (
        <Instruction instruction={instruction} />
      ))}
    </div>
  );
};

export default CocktailDetails;
