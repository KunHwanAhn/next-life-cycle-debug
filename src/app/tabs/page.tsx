import { Metadata } from 'next';
import React from 'react';

import { createQueryClient } from '@/services/queryClient';
import { TODO_LIST_KEY, TodoListKey } from '@/utils/queryKeys';
import { Todo } from '@/types';
import { AxiosError } from 'axios';
import { getTodos } from '@/services';
import TabsWrapper from './components/TabsWrapper';
import TodoItemWrapper from '../components/TodoItemWrapper';

export const generateMetadata = async (): Promise<Metadata> => ({ title: 'Tab UI' });

async function TabsPage() {
  const queryClient = createQueryClient();

  let todoList: Todo[] = [];
  try {
    todoList = await queryClient.fetchQuery<Todo[], AxiosError, Todo[], TodoListKey>({
      queryKey: TODO_LIST_KEY,
      queryFn: () => getTodos(),
    });
  } catch (error) {
    console.error('Error fetching todo list:', error);
  }

  const tabIds = todoList.slice(0, 3).map<string>((todo) => String(todo.id));

  return (
    <div id="tabs-page">
      <h1>Tabs</h1>
      <hr />
      <TabsWrapper tabIds={tabIds}>
        {tabIds.map<React.ReactElement>((tabId) => (
          <TodoItemWrapper key={tabId} todoId={tabId} />
        ))}
      </TabsWrapper>
    </div>
  );
}

export default TabsPage;
