import React from "react";
import "./create-todo-container.css";

const CreateTodoContainer = ({children}) => {
  return (
    <section className="create-todos-container">
      <h2 className="subtitle">Create new "To Do"</h2>
      <div id="create-todo">
        {children}
      </div>
    </section>
  );
};

export { CreateTodoContainer };
