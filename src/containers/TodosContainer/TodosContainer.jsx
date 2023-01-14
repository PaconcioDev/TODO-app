import React from "react";
import { TodoCounter } from "@components/TodoCounter/TodoCounter.jsx";
import { TodoItem } from "@components/TodoItem/TodoItem.jsx";
import { TodoList } from "@components/TodoList/TodoList.jsx";
import { TodoSearch } from "@components/TodoSearch/TodoSearch.jsx";
import { TodoContext } from "../../context/TodoContext";
import "./todos-container.css";

const TodosContainer = () => {
  const { searchedTodos, toggleCompleteTodo, deleteTodo } = React.useContext(TodoContext);

  return (
    <>
      <h1 className="title">Your "To do's"</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
    </>
  );
};

export { TodosContainer };
