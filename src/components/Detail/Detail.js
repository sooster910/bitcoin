import React from "react";
import { API_URL } from "../../config";
import { handleResponse, renderChangePercent } from "../../helpers";

import Loading from "../common/Loading";
import "./detail.css";

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: {},
      loading: false,
      error: null
    };
  }

  componentWillMount() {
    const currencyId = this.props.match.params.id;
    fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
      .then(handleResponse)
      .then(currency => {
        console.log("currency", currency);
        this.setState(() => {
          return {
            currency: currency,
            loading: false,
            error: null
          };
        });
      })
      .catch(error => {
        console.log("error", error);
        this.setState(() => {
          return {
            loading: false,
            error: error.errorMessage
          };
        });
      });
  }

  render() {
    console.log("currency", this.state.currency);
    //Render only loading component if loading state is set to true
    if (this.state.loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }
    if (this.state.error) {
      return <div className="error">{this.state.error}</div>;
    }
    return (
      <div className="detail">
        <h1 className="detail-heading">
          {this.state.currency.name}({this.state.currency.symbol})
        </h1>
        <div className="detail-container">
          <div className="detail-item">
            Price{" "}
            <span className="detail-value">${this.state.currency.price}</span>
          </div>
          <div className="detail-item">
            Rank{" "}
            <span className="detail-value">{this.state.currency.rank}</span>
          </div>

          <div className="detail-item">
            24H change{" "}
            <span className="detail-value">
              ${renderChangePercent(this.state.currency.percentChange24h)}
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-title">Market cap</span>
            <span className="detail-dollar">$</span>
            {this.state.currency.marketCap}
          </div>

          <div className="detail-item">
            <span className="detail-title">Total supply</span>
            <span className="detail-dollar">$</span>
            {this.state.currency.totalSupply}
          </div>

          <div className="detail-item">
            <span className="detail-title">volume24h</span>
            <span className="detail-dollar">$</span>
            {this.state.currency.volume24h}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
