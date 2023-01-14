import React from "react";

const TodoContainerContext = React.createContext();

function TodoProvider(props) {
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
    <TodoContainerContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContainerContext.Provider>
  );
}

export {TodoContainerContext, TodoProvider}
