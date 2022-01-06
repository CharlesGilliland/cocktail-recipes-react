import React from "react";

const instruction = (props) => {
  const ingredientsList = props.instruction.ingredients;
  const equipmentList = props.instruction.equipment;
  const glass = props.instruction.glass;
  const garnish = props.instruction.garnish;

  return (
    <div className="card instructionCard">
      <h5 className="card-header">{props.instruction.description}</h5>
      <div className="card-body">
        <div className="card-text row">
          <div className="col-3">
            <h4>
              <u>Ingredients</u>:
            </h4>
            <ul title="Ingredients">
              {ingredientsList.map((i) => (
                <li>{i.name}</li>
              ))}
            </ul>
          </div>
          <div className="col-3">
            <h4>
              <u>Equipment</u>:
            </h4>
            <ul title="Ingredients">
              {equipmentList.map((i) => (
                <p>{i.type}</p>
              ))}
            </ul>
          </div>
          <div className="col-3">
            <h4>
              <u>Garnish</u>:
            </h4>
            <ul title="Ingredients">
              <p>{garnish}</p>
            </ul>
          </div>
          <div className="col-3">
            <h4>
              <u>Glass</u>:
            </h4>
            <ul title="Ingredients">
              <p>{glass}</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default instruction;
