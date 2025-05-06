import { AxiosError } from 'axios';
import React from 'react';
import { Metadata } from 'next';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { getTodos } from '@/services';
import { createQueryClient } from '@/services/queryClient';
import { Todo } from '@/types';

import { GET_TODO_LIST_KEY, TodoListKey } from '../../utils/queryKeys';
import TodoListWrapper from './components/TodoListWrapper';

async function TodoListPage() {
  const queryClient = createQueryClient();

  await queryClient.prefetchQuery<Todo[], AxiosError, Todo[], TodoListKey>({
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

export const generateMetadata = async (): Promise<Metadata> => ({ title: 'Todo List' });

export default TodoListPage;
