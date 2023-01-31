import React from "react";
import { CreateTodoButton } from "@components/CreateTodoButton/CreateTodoButton.jsx";
import { CreateTodoText } from "@components/CreateTodoText/CreateTodoText.jsx";
import "./create-todo-container.css";

const CreateTodoContainer = () => {
  return (
    <section className="create-todos-container">
      <h2 className="subtitle">Create new "To Do"</h2>
      <div id="create-todo">
        <CreateTodoText />
        <CreateTodoButton />
      </div>
    </section>
  );
};

export { CreateTodoContainer };
