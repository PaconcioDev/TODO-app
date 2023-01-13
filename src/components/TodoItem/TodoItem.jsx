import React from "react";
import "./todo-item.css"

const TodoItem = (props) => {
  return <li>
    <button className="delete">X</button>
    <p className={props.completed && "todo-completed"}>{props.text}</p>
    <button className="check">✔</button>
  </li>;
};

export { TodoItem };
