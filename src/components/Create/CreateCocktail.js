import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import AddInstruction from "./AddInstruction";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const CreateCocktail = () => {
  const url =
    "http://" + process.env.REACT_APP_API_IP + ":8080/cocktail/addCocktail";


  const [cocktail, setCocktail] = useState({
    instructions: [],
    name: "",
    description: "",
    noOfSteps: 0,
  });

  const [storedInstructions, setStoredInstructions] = useState([]);


  const handleChange = (evn) => {
    setCocktail({ ...cocktail, [evn.target.name]: evn.target.value });
  };

  const submit = (evn) => {
    evn.preventDefault();
    cocktail.instructions = storedInstructions;
    axios
      .post(url, {
        instructions: cocktail.instructions,
        name: cocktail.name,
        description: cocktail.description,
        noOfSteps: cocktail.instructions.length,
      })
      .then((response) => {
        console.log(response.status);
      });
  };

  return (
    <div className="contentContainer">
      <h2>Add a New Cocktail</h2>
      <div className="form-container">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label for="cocktailNameInput" className="form-label">
              Name
            </label>
            <input
              value={cocktail.name}
              type="text"
              name="name"
              className="form-control"
              id="cocktailNameInput"
              onChange={handleChange}
            />
          </div>

          <AddInstruction fullInstructions={storedInstructions => setStoredInstructions(storedInstructions)}/>

          <div className="mb-3">
            <label for="cocktailDescriptionInput" className="form-label">
              Description
            </label>
            <textarea
              value={cocktail.description}
              type="textbox"
              name="description"
              className="form-control"
              id="cocktailDescriptionInput"
              onChange={handleChange}
            />
          </div>

          <button id="createCocktailButton" type="submit" className="btn btn-dark">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCocktail;
