export const ROUTE = {
  INDEX: '/',
  TODO: '/todo',
  TODO_ITEM: '/todo/[todoId]',
  PAGE: {
    INDEX: '/page',
    TODO: '/page/todo',
    TODO_ITEM: '/page/todo/[todoId]',
  },
} as const;

export const QUERY_KEYS = {
  TODO_LIST: 'todoList',
  TODO_ITEM: 'todoItem',
} as const;
