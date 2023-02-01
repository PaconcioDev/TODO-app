import React from "react";
import "./todo-search.css";

const TodoSearch = ({searchValue, setSearchValue, children}) => {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  };

  return (
    <div className="search-container">
      <input
        placeholder="I have to..."
        onChange={onSearchValueChange}
        value={searchValue}
        />
        {children}
    </div>
  );
};

export { TodoSearch };
