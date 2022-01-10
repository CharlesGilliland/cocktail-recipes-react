import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Instruction from "./Instruction";
import { Button } from "react-bootstrap";

const CocktailDetails = (props) => {
  const { id } = useParams();
  const url = "http://" + process.env.REACT_APP_API_IP + ":8080/cocktail/getCocktail?id=" + id;
  const deleteUrl = "http://" + process.env.REACT_APP_API_IP + ":8080/cocktail/deleteCocktail?id=" + id;
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCocktail(response.data);
    });
  }, []);

  const deleteCocktail = (e) => {
    e.preventDefault();
    if(window.confirm(`Are you sure you want to delete ${cocktail.name}`)){
      axios.delete(deleteUrl).then((response) => {
        console.log(response.data);
      })
    }
  }

  if (!cocktail) return <h1>Loading Cocktails...</h1>;

  return (
    <div className="container">
      <h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
      {cocktail.instructions.map((instruction) => (
        <Instruction instruction={instruction} />
      ))}
      <Button variant="danger" onClick={deleteCocktail}>
        Delete Cocktail
      </Button>
    </div>
  );
};

export default CocktailDetails;
