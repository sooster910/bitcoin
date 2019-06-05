import React from "react";
import "./pagination.css";

const Pagination = props => {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => props.handlePaginationClick("prev")}
        disabled={props.page <= 1}
      >
        &larr;
      </button>

      <span className="pagination-info">
        <b>{props.page}</b> of <b>{props.totalPages}</b>
      </span>

      <button
        className="pagination-button"
        onClick={() => props.handlePaginationClick("next")}
        disabled={props.page >= props.totalPages}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
