import React from "react";
import Loading from "../common/Loading";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";
import "./search.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const searchTerm = e.target.value;
    console.log("input", searchTerm);
    this.setState(() => ({
      searchTerm
    }));

    //If searchQuery isn't present, don't send request to server
    if (!searchTerm) {
      return "";
    }

    this.setState(() => ({ loading: true }));

    fetch(`${API_URL}/autocomplete?searchQuery=${searchTerm}`)
      .then({ handleResponse })
      .then(data => {
        console.log("Success searchTerm", data);
        this.setState(() => ({
          loading: false
        }));
      })
      .catch(error => {
        console.log("Error", error);
      });

    console.log("state", this.state);
  }

  render() {
    return (
      <div className="search-container">
        <span className="search-icon">
          {" "}
          <ion-icon name="search" />{" "}
        </span>
        <input
          className="search-input"
          type="text"
          placeholder="Currency name"
          onChange={this.handleChange}
        />
        {this.state.loading && (
          <div className="search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
