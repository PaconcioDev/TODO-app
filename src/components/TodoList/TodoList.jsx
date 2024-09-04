import React from 'react';
import './todo-list.css';
import { CreateTodoModalButton } from '@components/CreateTodoModalButton/CreateTodoModalButton.jsx';

const TodoList = ({
  render,
  filter,
  searchedTodos,
  completedTodos,
  totalTodos,
  onEmptySearchResults,
  modalControl
}) => {
  return (
    <section id='list'>
      <ul>
        {!!totalTodos && !searchedTodos.length && onEmptySearchResults()}
        {filter && completedTodos.map(render)}
        {!filter && searchedTodos.map(render)}
      </ul>
      <CreateTodoModalButton modalControl={modalControl} />
    </section>
  );
};

export { TodoList };
