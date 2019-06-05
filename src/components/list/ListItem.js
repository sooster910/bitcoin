import React from "react";
import "./Table.css";
import { withRouter } from "react-router-dom";
import { renderChangePercent } from "../../helpers";
const ListItem = props => {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Ranking</th>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24Hr Change</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.currencies.map(currency => (
            <tr
              key={currency.id}
              onClick={() => props.history.push(`/currency/${currency.id}`)}
            >
              <td className="table-rank">{currency.rank}</td>
              <td>{currency.name}</td>
              <td>
                <span className="table-dollar">$</span>
                {currency.price}
              </td>
              <td>
                <span className="table-market">$</span>
                {currency.marketCap}
              </td>
              <td>{renderChangePercent(currency.percentChange24h)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(ListItem);
