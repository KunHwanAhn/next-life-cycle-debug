import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getTodos } from '@/services';
import { Todo } from '@/types';
import { GET_TODO_LIST_KEY, GetTodoListKey } from '@/utils/queryKeys';

interface UseGetTodoListResultBase extends Pick<UseQueryResult, 'isSuccess' | 'isLoading' | 'isRefetching' | 'isError'> {
  todoList: Todo[] | undefined;
}

interface UseGetTodoListResultSuccess extends UseGetTodoListResultBase {
  todoList: Todo[];
  isSuccess: true;
  isLoading: false;
  isRefetching: false;
  isError: false;
}
interface UseGetTodoListResultFail extends UseGetTodoListResultBase {
  todoList: undefined;
  isSuccess: false;
  isLoading: false;
  isRefetching: false;
  isError: false;
}
interface UseGetTodoListResultError extends UseGetTodoListResultBase {
  todoList: undefined;
  isSuccess: false;
  isLoading: false;
  isRefetching: false;
  isError: true;
}
interface UseGetTodoListResultLoading extends UseGetTodoListResultBase {
  todoList: undefined;
  isSuccess: false;
  isLoading: true;
  isRefetching: false;
  isError: false;
}
interface UseGetTodoListResultRefetching extends UseGetTodoListResultBase {
  isLoading: false;
  isRefetching: true;
}
// eslint-disable-next-line max-len
type UseGetTodoListResult = UseGetTodoListResultSuccess | UseGetTodoListResultFail | UseGetTodoListResultError | UseGetTodoListResultLoading | UseGetTodoListResultRefetching;
type UseGetTodoList = () => UseGetTodoListResult;
const useGetTodoList: UseGetTodoList = () => {
  const {
    data: todoList, isSuccess, isError, isLoading, isRefetching,
  } = useQuery<Todo[], AxiosError, Todo[], GetTodoListKey>({
    queryKey: GET_TODO_LIST_KEY,
    queryFn: () => getTodos(),
  });

  if (isLoading) {
    const result: UseGetTodoListResultLoading = {
      todoList: undefined,
      isSuccess,
      isLoading,
      isRefetching: false,
      isError,
    };
    return result;
  }

  if (isRefetching) {
    const result: UseGetTodoListResultRefetching = {
      todoList,
      isSuccess,
      isLoading,
      isRefetching,
      isError,
    };
    return result;
  }

  if (isError) {
    const result: UseGetTodoListResultError = {
      todoList: undefined,
      isSuccess,
      isLoading,
      isRefetching,
      isError,
    };
    return result;
  }

  if (todoList) {
    const result: UseGetTodoListResultSuccess = {
      todoList,
      isSuccess,
      isLoading,
      isRefetching,
      isError,
    };
    return result;
  }

  const result: UseGetTodoListResultFail = {
    todoList,
    isSuccess,
    isLoading,
    isRefetching,
    isError,
  };

  return result;
};

export default useGetTodoList;
