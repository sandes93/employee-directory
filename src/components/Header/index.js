import React from "react";
import "./style.css";

// Display the main heading
function Header () {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p className="sub-heading">Click on the Name heading to sort by name or use the search box to narrow your results</p>
        </div>
    )
}

export default Header;