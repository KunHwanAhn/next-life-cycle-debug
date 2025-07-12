import { getTodo } from '@/services';
import { Todo } from '@/types';
import { TodoItemKey, getTodoItemKey } from '@/utils/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface UseGetTodoItemParams {
  todoId: string;
}

const useGetTodoItem = ({ todoId }: UseGetTodoItemParams) => {
  const {
    data, isSuccess, isError, isLoading, isRefetching,
  } = useQuery<Todo, AxiosError, Todo, TodoItemKey>({
    queryKey: getTodoItemKey(todoId),
    queryFn: () => getTodo({ todoId }),
  });

  if (isLoading) {
    return {
      todoItem: undefined,
      isSuccess,
      isLoading,
      isRefetching: false,
      isError,
    };
  }

  if (isRefetching) {
    return {
      todoItem: undefined,
      isSuccess,
      isLoading: false,
      isRefetching,
      isError,
    };
  }

  if (isError) {
    return {
      todoItem: undefined,
      isSuccess,
      isLoading: false,
      isRefetching: false,
      isError,
    };
  }

  if (isSuccess) {
    return {
      todoItem: data,
      isSuccess,
      isLoading: false,
      isRefetching: false,
      isError: false,
    };
  }

  return {
    todoItem: undefined,
    isSuccess,
    isLoading: false,
    isRefetching: false,
    isError: false,
  };
};

export default useGetTodoItem;
