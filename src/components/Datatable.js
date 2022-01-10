import React from "react";


const Datatable = ({ data }) => {
  const columns = data[0] && Object.keys(data[0]);

  function display(row, column) {
    if(typeof row[column] == "boolean"){
      if(row[column]){
        return "True";
      } else {
        return "False";
      }
    } else {
      return row[column];
    }
  }

  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th className="headingText">{heading}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{display(row, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
