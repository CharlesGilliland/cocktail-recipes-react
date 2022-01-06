import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const AddInstruction = () => {
  const ingredientsUrl =
    "http://" + process.env.REACT_APP_API_IP + ":8080/ingredient/getAll";
  const equipmentUrl =
    "http://" + process.env.REACT_APP_API_IP + ":8080/equipment/getAll";
  const glassUrl =
    "http://" + process.env.REACT_APP_API_IP + ":8080/glass/getAll";
  const garnishUrl =
    "http://" + process.env.REACT_APP_API_IP + ":8080/garnish/getAll";

  const [instruction, setInstruction] = useState({
    ingredients: [],
    equipment: [],
    glasses: [],
    garnish: [],
    description: "",
  });

  const handleInstructionChange = (evn) => {
    setInstruction({ ...instruction, [evn.target.name]: evn.target.value });
  };

  useEffect(() => {
    setInstruction({
      ingredients: { selectedIngredients },
      equipment: { selectedEquipment },
      glasses: { selectedGlasses },
      garnish: { selectedGarnish },
    });
  });

  const [ingredientsFromDb, setIngredientsFromDb] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const [equipmentFromDb, setEquipmentFromDb] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const [glassesFromDb, setGlassesFromDb] = useState([]);
  const [selectedGlasses, setSelectedGlasses] = useState([]);

  const [garnishFromDb, setGarnishFromDb] = useState([]);
  const [selectedGarnish, setSelectedGarnish] = useState([]);

  useEffect(() => {
    axios.get(ingredientsUrl).then((response) => {
      setIngredientsFromDb(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(equipmentUrl).then((response) => {
      setEquipmentFromDb(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(glassUrl).then((response) => {
      setGlassesFromDb(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(garnishUrl).then((response) => {
      setGarnishFromDb(response.data);
    });
  }, []);

  const show = (evn) => {
    alert(JSON.stringify(instruction));
  };

  return (
    <div className="instruction-form-container">
      <h4>Add Instruction</h4>
      <label for="instructionDescription" className="form-label">
        Description
      </label>
      <input
        value={instruction.description}
        type="text"
        name="description"
        className="form-control"
        id="instructionDescription"
        onChange={handleInstructionChange}
      />

      <Select
        options={glassesFromDb}
        placeholder="Select Glass"
        getOptionLabel={(option) => option.type}
        getOptionValue={(option) => option}
        onChange={setSelectedGlasses}
        isMulti
      />
      <Select
        options={ingredientsFromDb}
        placeholder="Select Ingredients"
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option}
        onChange={setSelectedIngredients}
        isMulti
      />
      <Select
        options={equipmentFromDb}
        placeholder="Select Equipment"
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option}
        onChange={setSelectedEquipment}
        isMulti
      />
      <Select
        options={garnishFromDb}
        placeholder="Select Garnish"
        getOptionLabel={(option) => option.type}
        getOptionValue={(option) => option}
        onChange={setSelectedGarnish}
        isMulti
      />

      <button onClick={show}>Show all selected arrays</button>
    </div>
  );
};
export default AddInstruction;
