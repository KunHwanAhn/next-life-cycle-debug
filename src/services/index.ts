import type { Todo, Album } from '@/types/index';

import baseInstance from './apiInterface';

export const getTodos = async () => {
  const res = await baseInstance.get<Todo[]>('/todos');

  return res.data;
};

type GetTodoOptions = {
  todoId: string | number;
};
export const getTodo = async ({ todoId }: GetTodoOptions) => {
  const res = await baseInstance.get<Todo>(`/todos/${todoId}`);

  return res.data;
};

export const getAlbums = async () => {
  const res = await baseInstance.get<Album[]>('/albums');

  return res.data;
};
