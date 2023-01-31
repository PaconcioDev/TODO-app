import React from "react";
import "./todo-search.css";

const TodoSearch = ({searchValue, setSearchValue}) => {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  };

  return (
    <div id="search-container">
      <input
        placeholder="I have to..."
        onChange={onSearchValueChange}
        value={searchValue}
        />
    </div>
  );
};

export { TodoSearch };
