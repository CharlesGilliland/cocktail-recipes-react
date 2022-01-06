import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import AddInstruction from "./AddInstruction";

const CreateCocktail = () => {
  const url =
    "http://" + process.env.REACT_APP_API_IP + ":8080/cocktail/addCocktail";


  const [cocktail, setCocktail] = useState({
    instructions: [],
    name: "",
    description: "",
    noOfSteps: 0,
  });


  const handleChange = (evn) => {
    setCocktail({ ...cocktail, [evn.target.name]: evn.target.value });
  };

  const submit = (evn) => {
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

          <AddInstruction />

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCocktail;
