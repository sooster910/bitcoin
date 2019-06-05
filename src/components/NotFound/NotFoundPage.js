import React from "react";
import { Link } from "react-router-dom";
import "./notfoundpage.css";

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <h1 className="notfount-title">Oops! Page not found</h1>
      <Link to="/" className="notfound-link">
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
