import React from "react";
import { withRouter } from "react-router-dom";
import Loading from "../common/Loading";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";
import "./search.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      searchTerm: "",
      searchResult: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(currencyId) {
    //when user click search term, clear input value and close auto complete container
    //By clearing search query state
    this.setState(() => ({
      searchTerm: "",
      searchResult: []
    }));
    this.props.history.push(`/currency/${currencyId}`);
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
      .then(handleResponse)
      .then(searchResult => {
        console.log("Success searchTerm", searchResult);
        this.setState(() => ({
          loading: false,
          searchResult: searchResult
        }));
      })
      .catch(error => {
        console.log("Error", error);
      });

    console.log("state", this.state);
  }

  renderSearchResults() {
    const { searchResult, searchTerm } = this.state;
    if (!searchTerm) {
      return "";
    }

    if (searchResult.length > 0) {
      return (
        <div className="search-result-container">
          {searchResult.map(result => (
            <div
              key={result.id}
              className="search-result"
              onClick={() => this.handleRedirect(result.id)}
            >
              {result.name}({result.symbol})
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="search-result-container">
        <div className="search-no-result">No results found.</div>
      </div>
    );
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
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        {this.state.loading && (
          <div className="search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default withRouter(Search);
