import React from "react";
import "./todo-list.css";

const TodoList = ({
  render,
  filter,
  searchedTodos,
  completedTodos,
  totalTodos,
  onEmptySearchResults,
}) => {
  return (
    <section id="list">
      <ul>
        {totalTodos && !searchedTodos.length && onEmptySearchResults()}
        {filter && completedTodos.map(render)}
        {!filter && searchedTodos.map(render)}
      </ul>
    </section>
  );
};

export { TodoList };
