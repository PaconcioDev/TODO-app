import React from "react";
import { TodoCounter } from "@components/TodoCounter/TodoCounter.jsx";
import { TodoItem } from "@components/TodoItem/TodoItem.jsx";
import { TodoList } from "@components/TodoList/TodoList.jsx";
import { TodoSearch } from "@components/TodoSearch/TodoSearch.jsx";
import "./todos-container.css"

const fakeTodos = [
  {
    text: "Fake Todo 1",
    completed: false
  },
  {
    text: "Fake Todo 2",
    completed: false
  },
  {
    text: "Fake Todo 3",
    completed: true
  }
]

const TodosContainer = () => {
  return (
    <>
      <h1 className="title">Your "To do's"</h1>
      <TodoCounter/>
      <TodoSearch />
      <TodoList>
        {fakeTodos.map(todo => (
          <TodoItem text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
    </>
  );
};

export { TodosContainer };
