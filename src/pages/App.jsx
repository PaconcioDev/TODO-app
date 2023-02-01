import React from "react";
import { CreateTodoContainer } from "@containers/CreateTodoContainer/CreateTodoContainer.jsx";
import { CreateTodoText } from "@components/CreateTodoText/CreateTodoText.jsx";
import { CreateTodoButton } from "@components/CreateTodoButton/CreateTodoButton.jsx";
import { TodosContainer } from "@containers/TodosContainer/TodosContainer.jsx";
import { TodoCounter } from "@components/TodoCounter/TodoCounter.jsx";
import { TodoSearch } from "@components/TodoSearch/TodoSearch.jsx";
import { TodoList } from "@components/TodoList/TodoList.jsx";
import { TodoItem } from "@components/TodoItem/TodoItem.jsx";
import { FilterButton } from "@components/FilterButton/FilterButton";

import { useTodos } from "../hooks/useTodos";
import "./app.css";

function App() {
  const {
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    totalTodos,
    completedTodosNumber,
    completedTodos,
    searchValue,
    setSearchValue,
    newTodoValue,
    setNewTodoValue,
    addTodo,
    toggleFilter,
    filter,
  } = useTodos();

  return (
    <div id="app">
      <CreateTodoContainer>
        <CreateTodoText
          newTodoValue={newTodoValue}
          setNewTodoValue={setNewTodoValue}
        />
        <CreateTodoButton addTodo={addTodo} newTodoValue={newTodoValue} />
      </CreateTodoContainer>
      <TodosContainer>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodosNumber={completedTodosNumber}
        />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}>
          <FilterButton filter={filter} toggleFilter={toggleFilter} />
        </TodoSearch>
        <TodoList
          filter={filter}
          searchedTodos={searchedTodos}
          completedTodos={completedTodos}
          render={(todo) => (
            <TodoItem
              text={todo.text}
              completed={todo.completed}
              key={todo.text}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        />
      </TodosContainer>
    </div>
  );
}

export { App };
