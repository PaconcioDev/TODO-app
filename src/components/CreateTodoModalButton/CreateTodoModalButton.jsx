import React from 'react';
import './create-todo-modal-button.css';

const CreateTodoModalButton = ({ modalControl }) => {
  return (
    <button onClick={() => modalControl(true)} className='modal__btn'>+</button>
  );
};

export { CreateTodoModalButton };
