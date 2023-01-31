import React from "react";

const TodoCounter = ({ completedTodos, totalTodos}) => {
  return <h2 className="subtitle">You have completed {completedTodos} of {totalTodos} "to do's"</h2>;
};

export { TodoCounter };
