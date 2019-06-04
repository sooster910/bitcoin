import React from "react";
import ListItem from "./ListItem";
import { handleResponse } from "../../helpers";
import Loading from "../common/Loading";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        loading: true
      };
    });
    fetch("https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20")
      .then(handleResponse)
      .then(data => {
        this.setState(() => {
          return {
            currencies: data.currencies,
            loading: false
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

  renderChangePercent(percent) {
    if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>;
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>;
    } else {
      return <span>{percent}</span>;
    }
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
      <ListItem
        currencies={this.state.currencies}
        renderChangePercent={this.renderChangePercent}
      />
    );
  }
}

export default List;
