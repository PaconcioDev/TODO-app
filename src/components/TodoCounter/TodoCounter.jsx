import React from "react";
import { TodoContainerContext } from "../../context/TodoContainerContext";

const TodoCounter = () => {
  const {totalTodos, completedTodos} = React.useContext(TodoContainerContext)
  return <h2 className="subtitle">You have completed {completedTodos} of {totalTodos} "to do's"</h2>;
};

export { TodoCounter };
