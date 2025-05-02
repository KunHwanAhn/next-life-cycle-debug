'use client';

import React from 'react';
import useGetTodoList from '../hooks/useGetTodoList';

function TodoList() {
  const {
    todoList, isFetching, isError,
  } = useGetTodoList();

  console.log('todoList', todoList);
  console.log('isFetching', isFetching);
  console.log('isError', isError);

  return (
    <div>
      {/* Todo list items will be rendered here */}
    </div>
  );
}
export default TodoList;
