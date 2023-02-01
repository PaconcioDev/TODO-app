import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./filter-button.css";

const FilterButton = ({ toggleFilter, filter }) => {
  return (
    <button onClick={() => toggleFilter()} className="filter-btn">
      {!filter && <FontAwesomeIcon icon={faEye} />}
      {filter && <FontAwesomeIcon icon={faEyeSlash} />}
    </button>
  );
};

export { FilterButton };
