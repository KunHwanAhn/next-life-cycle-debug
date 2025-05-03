import React from 'react';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/services/queryClient';
import { getTodos } from '@/services';

import { GET_TODO_LIST_KEY } from '../../utils/queryKeys';
import TodoListWrapper from './components/TodoListWrapper';

async function TodoListPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: GET_TODO_LIST_KEY,
    queryFn: () => getTodos(),
  });

  return (
    <div id="todo-list-page">
      <h1>TODO List</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoListWrapper />
      </HydrationBoundary>
    </div>
  );
}

export default TodoListPage;
