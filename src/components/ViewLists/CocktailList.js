import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import CocktailCard from "../CocktailCard";

const CocktailList = () => {
  const url = "http://" + process.env.REACT_APP_API_IP + ":8080/cocktail/getAll";
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCocktails(response.data);
    });
  }, []);

  if(!cocktails) return <div className="contentContainer"><h1>Loading Cocktails...</h1></div>;


  const COCKTAIL = [
    {
      instructions: [
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
        {
          ingredients: [],
          equipment: [],
          description: "Get the lowball glass.",
          id: 13,
          glass: 4,
          garnish: null,
        },
      ],
      name: "Single Whiskey and Coke",
      description: "A shot of whiskey mixed with coke and ice.",
      noOfSteps: 3,
      id: 6,
    },
  ];

  return (
    <div className="contentContainer">
      {cocktails.map((cocktail) => (
        <CocktailCard cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailList;
