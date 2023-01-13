import React from "react";

const TodoCounter = (props) => {
  return <h2 className="subtitle">You have completed {props.completed} of {props.total} "to do's"</h2>;
};

export { TodoCounter };
