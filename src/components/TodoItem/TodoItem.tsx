import React from 'react';

import { Todo } from '@/types';
import useGetTodoItem from '@/hooks/useGetTodoItem';

export interface TodoItemProps {
  todoId: string;
}
function TodoItem({ todoId }: TodoItemProps) {
  const { todoItem, isSuccess, isError, isLoading, isRefetching } = useGetTodoItem({ todoId });

  if (isLoading || isRefetching) {
    return <div>Loading...</div>;
  }
  if (isError || !isSuccess) {
    return <div>Error loading todo item</div>;
  }
  if (!todoItem) {
    return <div>Todo item not found</div>;
  }

  return (
    <div>
      <h2>{`Todo ID: ${todoItem.id}`}</h2>
      <p>{`Title: ${todoItem.title}`}</p>
      <p>{`Completed: ${todoItem.completed ? 'Yes' : 'No'}`}</p>
    </div>
  );
}

export default TodoItem;
