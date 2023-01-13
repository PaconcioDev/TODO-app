import React from "react";
import { TodoCounter } from "@components/TodoCounter/TodoCounter.jsx";
import { TodoItem } from "@components/TodoItem/TodoItem.jsx";
import { TodoList } from "@components/TodoList/TodoList.jsx";
import { TodoSearch } from "@components/TodoSearch/TodoSearch.jsx";
import "./todos-container.css";

const fakeTodos = [
  {
    text: "Fake Todo 1",
    completed: false,
  },
  {
    text: "Fake Lol 2",
    completed: false,
  },
  {
    text: "Fake Wow 3",
    completed: true,
  },
];

const TodosContainer = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(fakeTodos);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length >= 1) {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    });
  } else {
    searchedTodos = todos;
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="title">Your "To do's"</h1>
      <TodoCounter completed={completedTodos} total={totalTodos} />
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
    </>
  );
};

export { TodosContainer };
