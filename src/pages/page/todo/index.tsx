import React from 'react';
import TodoList from '@/components/TodoList';
import { GetServerSideProps } from 'next';
import { DehydratedState, QueryClient, dehydrate } from '@tanstack/react-query';
import { GET_TODO_LIST_KEY, GetTodoListKey } from '@/utils/queryKeys';
import { getTodos } from '@/services';
import { Todo } from '@/types';
import { AxiosError } from 'axios';

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
    <section id="todo-list-layout">
      <div id="todo-page">
        <h1>TODO List</h1>
        <TodoList />
      </div>
    </section>
  );
}

export default TodoListPage;
