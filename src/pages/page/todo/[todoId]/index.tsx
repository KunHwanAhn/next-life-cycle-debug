import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { DehydratedState, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

import { createQueryClient } from '@/services/queryClient';
import { TodoItemKey, getTodoItemKey } from '@/utils/queryKeys';
import { Todo } from '@/types';
import { getTodo } from '@/services';
import { ROUTE } from '@/constants';
import TodoItem from '@/components/TodoItem';
import Head from 'next/head';

interface TodoItemPageProps {
  todoId: string;
}
interface TodoItemPagePropsWithDehydrate extends TodoItemPageProps {
  dehydrateState: DehydratedState;
}
export const getServerSideProps: GetServerSideProps<TodoItemPagePropsWithDehydrate> = async ({ query }) => {
  const todoId = query.todoId as string;

  if (!todoId) {
    return {
      redirect: {
        statusCode: 302,
        destination: ROUTE.PAGE.TODO,
      },
    };
  }

  const queryClient = createQueryClient();
  await queryClient.prefetchQuery<Todo, AxiosError, Todo, TodoItemKey>({
    queryKey: getTodoItemKey(todoId),
    queryFn: () => getTodo({ todoId }),
  });

  return {
    props: {
      todoId,
      dehydrateState: dehydrate(queryClient),
    },
  };
};

function TodoItemPage({ todoId }: TodoItemPageProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('TodoItemPage mounted');
  }, []);

  return (
    <>
      <Head>
        <title>
          {`Todo Item ${todoId}`}
        </title>
      </Head>
      <div id="todo-item-page">
        <h1>{'Hello, I\'m todo detail!'}</h1>
        <hr />
        <TodoItem todoId={todoId} />
      </div>
    </>
  );
}

export default TodoItemPage;
