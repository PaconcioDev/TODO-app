import React from 'react';
import './create-todo-modal.css';
import { CreateTodoText } from '../CreateTodoText/CreateTodoText';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

const CreateTodoModal = ({ modalControl, newTodoValue, setNewTodoValue, addTodo }) => {
  return (
    <div className='modal__backdrop' onClick={() => modalControl(false)}>
      <aside className='modal' onClick={(e) => e.stopPropagation()}>
        <CreateTodoText
          newTodoValue={newTodoValue}
          setNewTodoValue={setNewTodoValue}
        />
        <CreateTodoButton
          addTodo={addTodo}
          newTodoValue={newTodoValue}
          modalControl={modalControl}
        />
      </aside>
    </div>
  );
};

export { CreateTodoModal };
