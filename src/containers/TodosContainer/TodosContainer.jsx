import React from 'react';
import './todos-container.css';

const TodosContainer = ({ children }) => {
  return (
    <section className='todos-container'>
      <h1 className='title'>Your "To do's"</h1>
      {children}
    </section>
  );
};

export { TodosContainer };
