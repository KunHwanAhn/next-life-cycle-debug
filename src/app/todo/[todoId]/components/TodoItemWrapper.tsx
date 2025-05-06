'use client';

import React from 'react';
import TodoItem from '@/components/TodoItem';
import { TodoItemProps } from '@/components/TodoItem/TodoItem';

function TodoItemWrapper(props: TodoItemProps) {
  return <TodoItem {...props} />;
}
export default TodoItemWrapper;
