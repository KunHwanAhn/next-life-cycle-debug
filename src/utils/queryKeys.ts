import { QUERY_KEYS } from '@/constants';

export type TodoListKey = [typeof QUERY_KEYS.TODO_LIST];
export const TODO_LIST_KEY: TodoListKey = ['todoList'];

export type TodoItemKey = [typeof QUERY_KEYS.TODO_ITEM, string];
export const getTodoItemKey = (id: string): TodoItemKey => [
  QUERY_KEYS.TODO_ITEM,
  id,
];
