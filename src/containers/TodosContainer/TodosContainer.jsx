import React from "react";
import { TodoCounter } from "@components/TodoCounter/TodoCounter.jsx";
import { TodoItem } from "@components/TodoItem/TodoItem.jsx";
import { TodoList } from "@components/TodoList/TodoList.jsx";
import { TodoSearch } from "@components/TodoSearch/TodoSearch.jsx";
import { TodoContext } from "../../context/TodoContext";
import "./todos-container.css";

const TodosContainer = () => {
  const {
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <section className="todos-container">
      <h1 className="title">Your "To do's"</h1>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
    </section>
  );
};

export { TodosContainer };
