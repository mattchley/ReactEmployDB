import React from "react";

function DataArea(props) {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <img alt={props.name} className="img-fluid" src={props.picture}/>
        <span>
        {props.name}
        {props.phone}
        {props.email}
        {props.dob}
        </span>
      </li>
    </ul>
  );
}

export default DataArea;