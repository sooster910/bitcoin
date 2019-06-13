import React from "react";
import { API_URL } from "../../config";
import { handleResponse, renderChangePercent } from "../../helpers";
import { Link } from "react-router-dom";

import Loading from "../common/Loading";
import "./detail.css";
import { newExpression } from "@babel/types";

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: {},
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    console.log("didmount");

    const currencyId = this.props.match.params.id;
    this.fetchCurrency(currencyId);
  }

  componentWillReceiveProps(nextProps) {
    console.log("didupdate");
    if (this.props.location.pathname !== nextProps.location.pathname) {
      console.log("if state working", this.props.location.pathname);
      const newCurrencyId = nextProps.match.params.id;

      this.fetchCurrency(newCurrencyId);
    }
  }

  fetchCurrency(currencyId) {
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
        <div className="detail-heading-container">
          <Link to="/" className="back-page">
            <ion-icon name="arrow-round-back" />
          </Link>

          <h1 className="detail-heading">
            {this.state.currency.name}({this.state.currency.symbol})
          </h1>
        </div>
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
