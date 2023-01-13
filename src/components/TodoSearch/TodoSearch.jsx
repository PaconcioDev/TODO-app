import React from "react";
import "./todo-search.css";

const TodoSearch = (props) => {
  const onSearchValueChange = (e) => {
    props.setSearchValue(e.target.value)
  };

  return (
    <div id="search-container">
      <input
        placeholder="I have to..."
        onChange={onSearchValueChange}
        value={props.searchValue}
        />
    </div>
  );
};

export { TodoSearch };
