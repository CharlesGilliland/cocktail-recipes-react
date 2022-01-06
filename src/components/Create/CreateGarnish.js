import React from "react";
import { useState } from "react";
import axios from "axios";

const CreateGarnish = () => {
  const url =
    "http://" + process.env.REACT_APP_API_IP + ":8080/garnish/addGarnish";

  const [garnish, setGarnish] = useState({
    type: "",
    storage: "",
  });

  const handleChange = (evn) => {
    setGarnish({ ...garnish, [evn.target.name]: evn.target.value });
  };

  const submit = (evn) => {
      evn.preventDefault();
      axios.post(url, {
          type: garnish.type,
          storage: garnish.storage
      }).then(response => {
          console.log(response.status);
      });
  };

  return (
    <div className="contentContainer">
      <h2>Add a New Garnish</h2>
      <div className="form-container">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label for="garnishTypeInput" className="form-label">
              Type
            </label>
            <input
              value={garnish.type}
              type="text"
              name="type"
              className="form-control"
              id="garnishTypeInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="garnishStorageInput" className="form-label">
              Storage
            </label>
            <input
              value={garnish.storage}
              type="text"
              name="storage"
              className="form-control"
              id="garnishStorageInput"
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

export default CreateGarnish;
