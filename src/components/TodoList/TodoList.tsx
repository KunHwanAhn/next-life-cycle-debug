import React, { useCallback } from 'react';

import { ROUTE } from '@/constants';
import useGetTodoList from '@/hooks/useGetTodoList';

import TodoListItem from './components/TodoListItem';

export interface TodoListProps {
  isAppRouter?: boolean;
}
function TodoList({ isAppRouter = false }: TodoListProps) {
  const {
    todoList, isSuccess, isError, isLoading, isRefetching,
  } = useGetTodoList();

  const getTodoItemUrl = useCallback((id: number) => {
    const todoItemUrlBase = isAppRouter ? ROUTE.TODO : ROUTE.PAGE.TODO;

    return `${todoItemUrlBase}/${id}`;
  }, [isAppRouter]);

  if (isLoading || isRefetching) {
    return <div>Loading...</div>;
  }

  if (isError || !isSuccess) {
    return <div>Error loading todo list</div>;
  }

  return (
    <div>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          text={todo.title}
          url={getTodoItemUrl(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
