import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

// const fakeTodos = [
//   {
//     text: "Fake Todo 1",
//     completed: false,
//   },
//   {
//     text: "Fake Lol 2",
//     completed: false,
//   },
//   {
//     text: "Fake Wow 3",
//     completed: true,
//   },
// ];

function TodoProvider(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

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

  const [newTodoValue, setNewTodoValue] = React.useState("")

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false,
    });
    saveTodos(newTodos);
    setNewTodoValue("");
  };

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        addTodo,
        newTodoValue,
        setNewTodoValue,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
