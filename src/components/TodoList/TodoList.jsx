import React from "react";
import "./todo-list.css";

const TodoList = ({ render, filter, searchedTodos, completedTodos }) => {
  return (
    <section id="list">
      <ul>
        {filter && completedTodos.map(render)}
        {!filter && searchedTodos.map(render)}
      </ul>
    </section>
  );
};

export { TodoList };
