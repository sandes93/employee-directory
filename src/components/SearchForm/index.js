import React from "react";

// The input text field
function SearchForm(props) {
  return (
    <form className="search" id="form-style">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          onChange={props.handleInputChange}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Type in a name to begin"
          id="employee"
        />
      </div>
    </form>
  );
}

export default SearchForm;