'use client';

import React from 'react';
import TodoItem, { TodoItemProps } from '@/components/TodoItem';

function TodoItemWrapper({ todoId }: TodoItemProps) {
  return <TodoItem todoId={todoId} />;
}
export default TodoItemWrapper;
