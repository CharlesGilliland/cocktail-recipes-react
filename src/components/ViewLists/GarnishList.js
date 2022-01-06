import React from "react";
import { useState, useEffect } from "react";
import Datatable from "../Datatable";
import axios from "axios";

const GarnishList = () => {
  const [q, setQ] = useState("");
  const url = "http://" + process.env.REACT_APP_API_IP + ":8080/garnish/getAll";
  const [garnish, setGarnish] = useState([]);

  useEffect(() => {
    axios.get(url).then(response => {
      setGarnish(response.data);
    });
  }, []);


  function search(rows) {
    return rows.filter((row) => row.type.toLowerCase().indexOf(q.toLowerCase()) > -1);
  }

  return (
    <div className="contentContainer">
    <h2>Garnish</h2>
      <div>
        <p>
          Search:
          <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
        </p>
      </div>
      <div>
        <Datatable data={search(garnish)} />
      </div>
    </div>
  );
};

export default GarnishList;