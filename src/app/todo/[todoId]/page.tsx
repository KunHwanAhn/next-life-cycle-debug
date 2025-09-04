import { AxiosError } from 'axios';
import React from 'react';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { createQueryClient } from '@/services/queryClient';
import { TodoItemKey, getTodoItemKey } from '@/utils/queryKeys';
import { Todo } from '@/types';
import { getTodo } from '@/services';
import { Metadata } from 'next';
import TodoItemWrapper from '../../components/TodoItemWrapper';

type TodoItemPageParams = {
  todoId: string;
};
interface TodoItemPageProps {
  params: Promise<TodoItemPageParams>;
}
async function TodoItemPage({ params }: TodoItemPageProps) {
  const { todoId } = await params;
  const queryClient = createQueryClient();

  await queryClient.prefetchQuery<Todo, AxiosError, Todo, TodoItemKey>({
    queryKey: getTodoItemKey(todoId),
    queryFn: () => getTodo({ todoId }),
  });

  return (
    <div id="todo-item-page">
      <h1>{'Hello, I\'m todo detail!'}</h1>
      <hr />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoItemWrapper todoId={todoId} />
      </HydrationBoundary>
    </div>
  );
}

export const generateMetadata = async ({ params }: TodoItemPageProps): Promise<Metadata> => {
  const { todoId } = await params;

  return { title: `Todo ${todoId}` };
};

export default TodoItemPage;
