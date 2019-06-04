import React from "react";
import "./Header.css";

function Header() {
  const title = "bitcoin";
  return (
    <header>
      <a className="header-logo" href="#">
        <img
          src="image/bitcoin_logo.png"
          alt="bitcoin_logo"
          className="bitcoin-logo"
        />
        <div className="header-title">{title}</div>
      </a>
    </header>
  );
}

export default Header;
