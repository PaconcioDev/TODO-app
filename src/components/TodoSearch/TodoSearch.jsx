import React from "react";
import { TodoContainerContext } from "../../context/TodoContainerContext";
import "./todo-search.css";

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContainerContext)

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
