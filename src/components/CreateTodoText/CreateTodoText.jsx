import React from 'react';
import './create-todo-text.css';

const CreateTodoText = ({ newTodoValue, setNewTodoValue }) => {
  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <textarea
      className='create-todo-textarea'
      placeholder=' I have to...'
      value={newTodoValue}
      onChange={onChange}
    />
  );
};

export { CreateTodoText };
