import "./empty-search-results.css";
import React from "react";

const EmptySearchResults = ({ searchText }) => {
  return (
    <p className="empty-search">
      Theres no results for <span className="search-text">"{searchText}"</span>
    </p>
  );
};

export { EmptySearchResults };
