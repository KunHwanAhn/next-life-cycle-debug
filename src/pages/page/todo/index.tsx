import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { AxiosError } from 'axios';
import { DehydratedState, dehydrate } from '@tanstack/react-query';
import TodoList from '@/components/TodoList';
import { TODO_LIST_KEY, TodoListKey } from '@/utils/queryKeys';
import { getTodos } from '@/services';
import { Todo } from '@/types';
import { createQueryClient } from '@/services/queryClient';

interface TodoListProps {
  dehydrateState: DehydratedState;
}
export const getServerSideProps: GetServerSideProps<TodoListProps> = async () => {
  const queryClient = createQueryClient();

  await queryClient.prefetchQuery<Todo[], AxiosError, Todo[], TodoListKey>({
    queryKey: TODO_LIST_KEY,
    queryFn: () => getTodos(),
  });

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};

function TodoListPage() {
  useEffect(() => {
    console.log('TodoListPage mounted');
  }, []);

  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <div id="todo-page">
        <h1>TODO List</h1>
        <TodoList />
      </div>
    </>
  );
}

export default TodoListPage;
