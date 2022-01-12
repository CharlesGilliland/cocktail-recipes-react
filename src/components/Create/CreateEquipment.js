import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEquipment = () => {
  const url =
    "http://" + process.env.REACT_APP_API_IP + ":8080/equipment/addEquipment";

  const [equipment, setEquipment] = useState({
    name: "",
    isPowered: false,
  });

  const handleChange = (evn) => {
    if (evn.target.type == "checkbox") {
      setEquipment({ ...equipment, isPowered: evn.target.checked });
    } else {
      setEquipment({ ...equipment, [evn.target.name]: evn.target.value });
    }
  };

  const navigate = useNavigate();

  const backToEquipment = () => {
    const path = '/equipment';
    navigate(path);
  }

  const submit = (env) => {
    env.preventDefault();
    axios
      .post(url, {
        name: equipment.name,
        isPowered: equipment.isPowered,
      })
      .then((response) => {
        console.log(response.status);
      });
    backToEquipment();
  };

  return (
    <div className="contentContainer">
      <h2>Add New Equipment</h2>
      <div className="form-container">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label for="equipmentNameInput" className="form-label">
              Name
            </label>
            <input
              value={equipment.name}
              type="text"
              name="name"
              className="form-control"
              id="equipmentNameInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              value={equipment.isPowered}
              type="checkbox"
              name="isPowered"
              className="form-check-input"
              id="garnishStorageInput"
              onChange={handleChange}
            />
            <label for="garnishStorageInput" className="form-check-label">
              Requires Power
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEquipment;
