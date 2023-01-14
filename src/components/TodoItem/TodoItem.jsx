import React from "react";
import "./todo-item.css";

const TodoItem = (props) => {
  return (
    <li>
      <button onClick={props.onDelete} className="delete">
        X
      </button>
      <p className={props.completed ? "todo-completed" : undefined}>
        {props.text}
      </p>
      <button onClick={props.onComplete} className="check">
        ✔
      </button>
    </li>
  );
};

export { TodoItem };
