import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Instruction from "./Instruction";
import { Button } from "react-bootstrap";

const CocktailDetails = (props) => {
  const { id } = useParams();
  const url =
    "http://" +
    process.env.REACT_APP_API_IP +
    ":8080/cocktail/getCocktail?id=" +
    id;
  const deleteUrl =
    "http://" +
    process.env.REACT_APP_API_IP +
    ":8080/cocktail/deleteCocktail?id=" +
    id;
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCocktail(response.data);
    });
  }, []);

  const navigate = useNavigate();

  const backToCocktail = () => {
    const path = "/cocktails";
    navigate(path);
  };

  const deleteCocktail = (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${cocktail.name}`)) {
      axios.delete(deleteUrl).then((response) => {
        console.log(response.data);
        backToCocktail();
      });
    }
  };

  if (!cocktail) return <h1>Loading Cocktails...</h1>;

  return (
    <div className="contentContainer">
      <div className="listTopDiv">
        <h1 className="mt-3">{cocktail.name}</h1>
        <p className="description">
          <q>{cocktail.description}</q>
        </p>
      </div>

      <div className="mt-5">
        {cocktail.instructions.map((instruction) => (
          <Instruction instruction={instruction} />
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <Button id="deleteCocktailButton" variant="danger" onClick={deleteCocktail}>
          Delete Cocktail
        </Button>
      </div>
    </div>
  );
};

export default CocktailDetails;
