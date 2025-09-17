import React from 'react';
import { GetServerSideProps } from 'next';
import { DehydratedState, dehydrate } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import Tabs from '@/components/Tabs';
import TodoItem from '@/components/TodoItem';
import { createQueryClient } from '@/services/queryClient';
import { Todo } from '@/types';
import { TODO_LIST_KEY, TodoListKey } from '@/utils/queryKeys';
import { getTodos } from '@/services';
import Head from 'next/head';

interface TabsPageProps {
  tabIds: string[];
}
interface TabsPagePropsWithDehydrate extends TabsPageProps {
  dehydrateState: DehydratedState;
}

export const getServerSideProps: GetServerSideProps<TabsPagePropsWithDehydrate> = async () => {
  const queryClient = createQueryClient();

  let todoList: Todo[] = [];
  try {
    todoList = await queryClient.fetchQuery<Todo[], AxiosError, Todo[], TodoListKey>({
      queryKey: TODO_LIST_KEY,
      queryFn: () => getTodos(),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching todo list:', error);
  }

  const tabIds = todoList.slice(0, 3).map<string>((todo) => String(todo.id));

  return {
    props: {
      tabIds,
      dehydrateState: dehydrate(queryClient),
    },
  };
};

function TabsPage(props: TabsPageProps) {
  const { tabIds } = props;
  return (
    <>
      <Head>
        <title>Tabs Page</title>
      </Head>
      <div id="tabs-page">
        <h1>Tabs</h1>
        <hr />
        <Tabs tabIds={tabIds}>
          {tabIds.map<React.ReactElement>((tabId) => (
            <TodoItem key={tabId} todoId={tabId} />
          ))}
        </Tabs>
      </div>
    </>
  );
}

export default TabsPage;
