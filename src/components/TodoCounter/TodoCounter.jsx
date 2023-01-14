import React from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoCounter = () => {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  return <h2 className="subtitle">You have completed {completedTodos} of {totalTodos} "to do's"</h2>;
};

export { TodoCounter };
