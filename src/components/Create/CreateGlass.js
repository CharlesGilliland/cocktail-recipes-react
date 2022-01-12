import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateGlass = () => {
  const url = "http://" + process.env.REACT_APP_API_IP + ":8080/glass/addGlass";

  const [glass, setGlass] = useState({
    type: "",
    volume: 0,
  });

  const navigate = useNavigate();

  const backToGlass = () => {
    const path = '/glass';
    navigate(path);
  }

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        type: glass.type,
        volume: glass.volume,
      })
      .then((response) => {
        console.log(response.status);
      });
    backToGlass();  
  };

  const handleChange = (evn) => {
    setGlass({...glass, [evn.target.name]: evn.target.value});
  };

  return (
    <div className="contentContainer">
      <h2>Add a New Glass</h2>
      <div className="form-container">
        <form onSubmit={(e) => submit(e)}>
          <div className="mb-3">
            <label for="glassTypeInput" className="form-label">
              Type
            </label>
            <input
              value={glass.type}
              type="text"
              name="type"
              className="form-control"
              id="glassTypeInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="glassVolumeInput" className="form-label">
              Volume
            </label>
            <input
              value={glass.volume}
              type="number"
              name="volume"
              className="form-control"
              id="glassVolumeInput"
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

export default CreateGlass;
