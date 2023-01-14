import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./todo-search.css";

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

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
