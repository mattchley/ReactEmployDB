import React from "react";

function DataBody(props) {
    return (
        <ul className="list-group">
            {props.result.map(result => (
                <li className="list-group-item" key={result.login.uuid}>
                    <img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} />
                    <span>
                        Name:{result.name.first} {result.name.last}, Phone:{result.phone}, Email:{result.email}, Date of Birth:{result.dob.date}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default DataBody;

