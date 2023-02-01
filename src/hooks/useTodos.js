import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const completedTodosNumber = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const [filter, setFilter] = React.useState(false);
  const toggleFilter = () => {
    setFilter(!filter);
  }; 
  
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
  const completedTodos = searchedTodos.filter((todo) => todo.completed);
  
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false,
      id: text+newTodos.length,
    });
    saveTodos(newTodos);
    setNewTodoValue("");
    console.log(newTodos)
  };

  const toggleCompleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
    totalTodos,
    completedTodosNumber,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    addTodo,
    newTodoValue,
    setNewTodoValue,
    filter,
    toggleFilter,
  };
}

export { useTodos };
