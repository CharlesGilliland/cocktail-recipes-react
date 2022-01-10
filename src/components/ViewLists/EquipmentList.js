import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Datatable from "../Datatable";

const EquipmentList = () => {
  const [q, setQ] = useState("");
  const url =
    "http://" + process.env.REACT_APP_API_IP + ":8080/equipment/getAll";
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setEquipment(response.data);
    });
  }, []);

  function search(rows) {
    return rows.filter(
      (row) => row.name.toLowerCase().indexOf(q.toLowerCase()) > -1
    );
  }
  return (
    <div className="contentContainer">
      <div className="listTopDiv">
        <h2 className="listHeading">Equipment</h2>
        <div>
          <p className="searchText">
            Search:
            <input
              className="searchInput"
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </p>
        </div>
      </div>
      <div>
        <Datatable data={search(equipment)} />
      </div>
    </div>
  );
};

export default EquipmentList;
