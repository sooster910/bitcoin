import React from "react";
import ListItem from "./ListItem";
import Pagination from "./Pagination";
import { handleResponse } from "../../helpers";
import Loading from "../common/Loading";
import { API_URL } from "../../config";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1
    };
    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    this.setState(() => {
      return {
        loading: true
      };
    });

    const { page } = this.state;
    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then(handleResponse)
      .then(data => {
        console.log(data);
        this.setState(() => {
          return {
            currencies: data.currencies,
            loading: false,
            totalPages: data.totalPages
          };
        });
      })
      .catch(error => {
        this.setState(() => {
          return {
            error: error.errorMessage,
            loading: false
          };
        });
        console.log("Error", error);
      });
  }

  handlePaginationClick(direction) {
    let nextPage = this.state.page;
    nextPage = direction === "next" ? nextPage + 1 : nextPage - 1;

    //call fetchCurrencies function inside setState's callback
    //because make sure first page state is updated.
    this.setState({ page: nextPage }, () => {
      this.fetchCurrencies();
    });
  }

  render() {
    // console.log("this.state", this.state);

    //render only loading component, if loading state is set to true
    if (this.state.loading) {
      return <Loading />;
    }

    //render only error message, if error occured while fetching data
    if (this.state.error) {
      return <div className="error">{this.state.error}</div>;
    }
    return (
      <div>
        <ListItem
          currencies={this.state.currencies}
          // renderChangePercent={this.renderChangePercent}
        />
        <Pagination
          handlePaginationClick={this.handlePaginationClick}
          page={this.state.page}
          totalPages={this.state.totalPages}
        />
      </div>
    );
  }
}

export default List;
