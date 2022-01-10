import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Datatable from "../Datatable";

const GlassList = () => {
  const [q, setQ] = useState("");
  const url = "http://" + process.env.REACT_APP_API_IP + ":8080/glass/getAll";
  const [glasses, setGlasses] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setGlasses(response.data);
    });
  }, []);

  function search(rows) {
    return rows.filter(
      (row) => row.type.toLowerCase().indexOf(q.toLowerCase()) > -1
    );
  }

  return (
    <div className="contentContainer">
      <div className="listTopDiv">
        <h2 className="listHeading">Glasses</h2>
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
        <Datatable data={search(glasses)} />
      </div>
    </div>
  );
};

export default GlassList;
