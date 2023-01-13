import React from "react";
import { CreateTodoButton } from "@components/CreateTodoButton/CreateTodoButton.jsx";
import { CreateTodoText } from "@components/CreateTodoText/CreateTodoText.jsx";
import "./create-todo-container.css";

const CreateTodoContainer = () => {
  return (
    <>
      <h2 className="subtitle">Create new "To Do"</h2>
      <div id="create-todo">
        <CreateTodoText />
        <CreateTodoButton />
      </div>
    </>
  );
};

export { CreateTodoContainer };
