import React from "react";
import "./style.css";

// Name header is clickable to change the sort order of the results alpabetical or reverse alphabetical
function TableHeader(props) {
  return (
    <thead>
        <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick={props.handleClick} id="name-heading">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
        </tr>
    </thead>
  );
}

export default TableHeader;