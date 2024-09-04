import React from 'react';
import './create-todo-button.css';

const CreateTodoButton = ({ addTodo, newTodoValue, modalControl }) => {
  return (
    <button
      onClick={() => {
        addTodo(newTodoValue);
        if (window.innerWidth <= 1024) {
          modalControl(false);
        }
      }}
      id='create-todo-btn'
    >✔
    </button>
  );
};

export { CreateTodoButton };
