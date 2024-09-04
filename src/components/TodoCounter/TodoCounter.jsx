import React from 'react';

const TodoCounter = ({ completedTodosNumber, totalTodos }) => {
  return <h2 className='subtitle'>You have completed {completedTodosNumber} of {totalTodos} "to do's"</h2>;
};

export { TodoCounter };
