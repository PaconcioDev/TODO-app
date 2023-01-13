import React from "react";
import "./todo-list.css";

const TodoList = (props) => {
  return (
    <section id="list">
      <ul>{props.children}</ul>
    </section>
  );
};

export { TodoList };
