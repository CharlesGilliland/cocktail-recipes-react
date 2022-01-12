import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateIngredient = () => {
  const url =
    "http://" + process.env.REACT_APP_API_IP + ":8080/ingredient/addIngredient";

  const [ingredient, setIngredient] = useState({
    name: "",
    type: "",
    abv: 0,
    storage: "",
    description: "",
  });

  const handleChange = (evn) => {
    setIngredient({ ...ingredient, [evn.target.name]: evn.target.value });
  };

  const navigate = useNavigate();

  const backToIngredient = () => {
    const path = '/ingredients';
    navigate(path);
  }

  const submit = (evn) => {
    evn.preventDefault();
    axios.post(url, {
      name: ingredient.name,
      type: ingredient.type,
      abv: ingredient.abv,
      storage: ingredient.storage,
      description: ingredient.description,
    }). then(response => {
        console.log(response.status);
    });
    backToIngredient();
  };

  return (
    <div className="contentContainer">
    <h2>Add a New Ingredient</h2>
    <div className="form-container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="ingredientNameInput" className="form-label">
            Name
          </label>
          <input
            value={ingredient.name}
            type="text"
            name="name"
            className="form-control"
            id="ingredientNameInput"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="ingredientTypeInput" className="form-label">
            Type
          </label>
          <input
            value={ingredient.type}
            type="text"
            name="type"
            className="form-control"
            id="ingredientTypeInput"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="ingredientAbvInput" className="form-label">
            ABV
          </label>
          <input
            value={ingredient.abv}
            type="number"
            min="0"
            max="100"
            name="abv"
            className="form-control"
            id="ingredientAbvInput"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="ingredientStorageInput" className="form-label">
            Storage
          </label>
          <input
            value={ingredient.storage}
            type="text"
            name="storage"
            className="form-control"
            id="ingredientStorageInput"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="ingredientDescriptionInput" className="form-label">
            Description
          </label>
          <textarea
            value={ingredient.description}
            type="textbox"
            name="description"
            className="form-control"
            id="ingredientDescriptionInput"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  </div>
  );
};

export default CreateIngredient;
