import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const InstructionList = ({ instructions }) => {
  return (
    <div>
      <ListGroup>
          {instructions.map((i) => 
            <ListGroupItem id={i.id}>{i.description}</ListGroupItem>
          )}
      </ListGroup>
    </div>
  );
};

export default InstructionList;
