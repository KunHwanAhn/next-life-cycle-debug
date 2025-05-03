import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { AxiosError } from 'axios';
import { DehydratedState, QueryClient, dehydrate } from '@tanstack/react-query';
import TodoList from '@/components/TodoList';
import { GET_TODO_LIST_KEY, GetTodoListKey } from '@/utils/queryKeys';
import { getTodos } from '@/services';
import { Todo } from '@/types';

interface TodoListProps {
  dehydrateState: DehydratedState;
}
export const getServerSideProps: GetServerSideProps<TodoListProps> = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<Todo[], AxiosError, Todo[], GetTodoListKey>({
    queryKey: GET_TODO_LIST_KEY,
    queryFn: () => getTodos(),
  });

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};

function TodoListPage() {
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
