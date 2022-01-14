import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import InstructionList from "./InstructionList";

const AddInstruction = (props) => {
  const ingredientsUrl =
    "http://" + process.env.REACT_APP_API_IP + ":8080/ingredient/getAll";
  const equipmentUrl =
    "http://" + process.env.REACT_APP_API_IP + ":8080/equipment/getAll";
  const glassUrl =
    "http://" + process.env.REACT_APP_API_IP + ":8080/glass/getAll";
  const garnishUrl =
    "http://" + process.env.REACT_APP_API_IP + ":8080/garnish/getAll";

  const handleDescriptionChange = (evn) => {
    setDescription(evn.target.value);
  };

  const [instruction, setInstruction] = useState("");
  const [instructions, setInstructions] = useState([]);

  const [description, setDescription] = useState("");

  const [ingredientsFromDb, setIngredientsFromDb] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [equipmentFromDb, setEquipmentFromDb] = useState([]);
  const [equipment, setEquipment] = useState([]);

  const [glassesFromDb, setGlassesFromDb] = useState([]);
  const [glasses, setGlasses] = useState([]);

  const [garnishFromDb, setGarnishFromDb] = useState([]);
  const [garnish, setGarnish] = useState([]);

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

  useEffect(() => {
    setInstruction(
      `{"ingredients":${JSON.stringify(
        ingredients
      )},"equipment":${JSON.stringify(equipment)},"glasses":${JSON.stringify(
        glasses
      )},"garnish":${JSON.stringify(garnish)},"description":${JSON.stringify(
        description
      )}}`
    );
  });

  const AddNewInstruction = (e) => {
    e.preventDefault();
    setInstructions([...instructions, JSON.parse(instruction)]);
  };

  const setParent = (e) => {
    e.preventDefault();
    props.fullInstructions(instructions);
  };

  return (
    <div className="instruction-form-container">
      <InstructionList instructions={instructions} />
      <h4 className="align-center">Instructions</h4>
      <label for="instructionDescription" className="form-label">
        Description
      </label>
      <input
        value={description}
        type="text"
        name="description"
        className="form-control"
        id="instructionDescriptionInput"
        onChange={handleDescriptionChange}
      />

      <Select
        id="glassSelect"
        className="mt-3"
        options={glassesFromDb}
        placeholder="Select Glass"
        getOptionLabel={(option) => option.type}
        getOptionValue={(option) => option}
        onChange={setGlasses}
        isMulti
      />
      <Select
        id="ingredientsSelect"
        className="mt-3"
        options={ingredientsFromDb}
        placeholder="Select Ingredients"
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option}
        onChange={setIngredients}
        isMulti
      />
      <Select
        id="equipmentSelect"
        className="mt-3"
        options={equipmentFromDb}
        placeholder="Select Equipment"
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option}
        onChange={setEquipment}
        isMulti
      />
      <Select
        id="garnishSelect"
        className="mt-3 mb-3"
        options={garnishFromDb}
        placeholder="Select Garnish"
        getOptionLabel={(option) => option.type}
        getOptionValue={(option) => option}
        onChange={setGarnish}
        isMulti
      />

      <button id="addInstructionButton" className="btn btn-dark" onClick={AddNewInstruction}>
        Add Instruction
      </button>

      <button id="confirmInstructionsButton" className="btn btn-dark m-3 " onClick={setParent}>
        Confirm Instructions
      </button>
    </div>
  );
};
export default AddInstruction;
