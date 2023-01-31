import React from "react";
import "./create-todo-button.css";

const CreateTodoButton = ({addTodo, newTodoValue}) => {
  return <button onClick={() => addTodo(newTodoValue)} id="create-todo-btn">✔</button>;
};

export { CreateTodoButton };
