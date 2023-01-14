import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./create-todo-button.css";

const CreateTodoButton = () => {
  const { addTodo, newTodoValue } = React.useContext(TodoContext);
  return <button onClick={() => addTodo(newTodoValue)} id="create-todo-btn">✔</button>;
};

export { CreateTodoButton };
