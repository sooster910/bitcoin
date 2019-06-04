import React from "react";
import { handleResponse } from "../../helpers";
import "./Table.css";

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
    console.log("this.state", this.state);
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="table-container">
        <h2>List</h2>

        <table className="table">
          <thead className="table-head">
            <tr>
              <th>Ranking</th>
              <th> Cryptocurrency</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24Hr Change</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {this.state.currencies.map(currency => (
              <tr key={currency.id}>
                <td>{currency.rank}</td>
                <td>{currency.name}</td>
                <td>
                  {" "}
                  <span className="table-dollar"> ${currency.price}</span>
                </td>
                <td>
                  <span className="table-market"> ${currency.marketCap}</span>
                </td>
                <td>{this.renderChangePercent(currency.percentChange24h)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
