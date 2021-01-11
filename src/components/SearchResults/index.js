import React from "react";

// Responsible for the display of the table body
function SearchResults(props) {
  // Data is sorted alphabetically upon initial display and can be changed to reversed alphabetical order
  if (props.order === "ascend") {
    const res = props.results;
    const sortedArray = res.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
  } else {
    const res = props.results;
    const sortedArray = res.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
  }

  // To convert the date given from api to day/month/year
  function formatDate(date){
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate =[day, month, year].join("-");
    return formattedDate;
}

  // Display the table body with the employees data. Table row key is the email which must be unique.
  return (
    <tbody className="table">
      {props.results.map(result => (
        <tr key={result.email}>
          <td><img alt="Employee photo" src={result.picture.thumbnail} /></td>
          <td>{result.name.first + " " + result.name.last}</td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{formatDate(result.dob.date)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default SearchResults;