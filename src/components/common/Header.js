import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./Header.css";

function Header() {
  const title = "CoinTracker";
  return (
    <header>
      <Link to="/" className="header-logo">
        <img
          src="/image/bitcoin_logo.png"
          alt="bitcoin_logo"
          className="bitcoin-logo"
        />
        <div className="header-title">{title}</div>
      </Link>
      <Search />
    </header>
  );
}

export default Header;
