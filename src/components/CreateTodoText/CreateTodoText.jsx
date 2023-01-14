import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./create-todo-text.css";

const CreateTodoText = () => {
  const  {newTodoValue, setNewTodoValue} = React.useContext(TodoContext)
  const onChange = (e) => {
    setNewTodoValue(e.target.value)
  }

  return (
    <textarea
      className="create-todo-textarea"
      placeholder=" I have to..."
      value={newTodoValue}
      onChange={onChange}
    ></textarea>
  );
};

export { CreateTodoText };
