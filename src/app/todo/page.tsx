import React from 'react';
import TodoList from './components/TodoList';
import { getQueryClient } from '@/services/queryClient';
import { GET_TODO_LIST_KEY } from './utils/queryKeys';
import { getTodos } from '@/services';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

async function TodoListPage() {
  console.log('todo - page - component');

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: GET_TODO_LIST_KEY,
    queryFn: () => getTodos(),
  });

  return (
    <div id="todo-page">
      <h1>TODO List</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoList />
      </HydrationBoundary>

    </div>
  );
}

export default TodoListPage;
