import React from "react";

function DataBody(props) {
    return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item">
                    <img alt={props.name} className="img-fluid" src={props.picture} />
                    <span>
                        {props.name}
                        {props.phone}
                        {props.email}
                        {props.dob}
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default DataBody;
// {props.results.map(result => (
//     <li className="list-group-item" key={result.id}>
//       <img alt={result.title} className="img-fluid" src={result.images.original.url} />
//     </li>
//   ))}