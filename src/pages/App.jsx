import React from 'react';
import { CreateTodoContainer } from '@containers/CreateTodoContainer/CreateTodoContainer.jsx';
import { CreateTodoText } from '@components/CreateTodoText/CreateTodoText.jsx';
import { CreateTodoButton } from '@components/CreateTodoButton/CreateTodoButton.jsx';
import { TodosContainer } from '@containers/TodosContainer/TodosContainer.jsx';
import { TodoCounter } from '@components/TodoCounter/TodoCounter.jsx';
import { TodoSearch } from '@components/TodoSearch/TodoSearch.jsx';
import { EmptySearchResults } from '@components/EmptySearchResults/EmptySearchResults';
import { TodoList } from '@components/TodoList/TodoList.jsx';
import { TodoItem } from '@components/TodoItem/TodoItem.jsx';
import { FilterButton } from '@components/FilterButton/FilterButton.jsx';
import { CreateTodoModal } from '@components/CreateTodoModal/CreateTodoModal.jsx';

import { useTodos } from '../hooks/useTodos';
import './app.css';

function App () {
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
    filter
  } = useTodos();

  const [modal, setModal] = React.useState(false);

  return (
    <div id='app'>
      {
        modal &&
          <CreateTodoModal
            modalControl={setModal}
            newTodoValue={newTodoValue}
            setNewTodoValue={setNewTodoValue}
            addTodo={addTodo}
          />
      }
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
          searchText={searchValue}
          totalTodos={totalTodos}
          modalControl={setModal}
          onEmptySearchResults={() => <EmptySearchResults searchText={searchValue} />}
          render={(todo) => (
            <TodoItem
              text={todo.text}
              completed={todo.completed}
              key={todo.id}
              onComplete={() => toggleCompleteTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          )}
        />
      </TodosContainer>
    </div>
  );
}

export { App };
