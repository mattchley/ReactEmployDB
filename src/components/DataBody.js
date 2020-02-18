import React from "react";

function DataBody(props) {
    let id = 1
    return (
        <ul className="list-group">
            {props.result.map(result => (
                <li className="list-group-item">
                    <p key= {id++}></p>
                    <img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} />
                    <span>
                        {result.name.first} {result.name.last}
                        {result.phone}
                        {result.email}
                        {result.dob.date}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default DataBody;

