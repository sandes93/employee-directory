import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container/index";
import SearchForm from "../SearchForm/index";
import SearchResults from "../SearchResults/index";
import TableHeader from "../TableHeader/index";
import Alert from "../Alert/index";
import "./style.css";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    sortOrder: "ascend",
    filteredEmps: [],
    error: ""
  };

  // When the component mounts, get a list of all available employees and update this.state.employees and filteredEmps
  componentDidMount() {
    API.getAllEmployees()
      .then(res => this.setState({ employees: res.data.results, filteredEmps: res.data.results }))
      .catch(err => console.log(err));
  }

  // Event handler triggered when text is added to the text box
  handleInputChange = event => {
    // Get the input and convert to lower case
    const letterInput = (event.target.value).toLowerCase();
    const allEmps = this.state.employees;
    // Filter the employees array by the input text
    const filteredList = (allEmps.filter(item => 
      ((item.name.first + " " + item.name.last).toLowerCase()).includes(letterInput))
    )
    // Only the filteredEmps is updated since employees will remain as the full list of employees
    this.setState({ filteredEmps: filteredList });
  }

  // Triggered when Name is clicked on. Switches between sorting name alphabetically ascending or descending.
  handleSortChange = event => {
    if (this.state.sortOrder === "ascend") {
      this.setState({ sortOrder: "descend" })
    } else {
      this.setState({ sortOrder: "ascend" })
    }
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 5 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <div id="table-wrapper">
            <table>
              <TableHeader handleClick={this.handleSortChange} />
              <SearchResults results={this.state.filteredEmps} order={this.state.sortOrder} />
            </table>
          </div>
        </Container>
      </div>
    );
  }
}

export default Search;
