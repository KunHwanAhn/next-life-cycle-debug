import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getTodos } from '@/services';
import { Todo } from '@/types';
import { GET_TODO_LIST_KEY, GetTodoListKey } from '../utils/queryKeys';


interface UseGetTodoListResultBase {
  todoList: Todo[] | undefined;
  isFetching: UseQueryResult['isFetching'];
  isError: UseQueryResult['isError'];
}

interface UseGetTodoListResultSuccess extends UseGetTodoListResultBase {
  todoList: Todo[];
  isFetching: false;
  isError: false;
}
interface UseGetTodoListResultFail extends UseGetTodoListResultBase {
  todoList: undefined;
  isFetching: false;
  isError: false;
}
interface UseGetTodoListResultError extends UseGetTodoListResultBase {
  todoList: undefined;
  isFetching: false;
  isError: true;
}
interface UseGetTodoListResultLoading extends UseGetTodoListResultBase {
  todoList: undefined;
  isFetching: true;
  isError: false;
}
type UseGetTodoListResult = UseGetTodoListResultSuccess | UseGetTodoListResultFail | UseGetTodoListResultError | UseGetTodoListResultLoading;
type UseGetTodoList = () => UseGetTodoListResult;
const useGetTodoList: UseGetTodoList = () => {
  const {
    data, isFetching, isError,
  } = useQuery<Todo[], AxiosError, Todo[], GetTodoListKey>({
    queryKey: GET_TODO_LIST_KEY,
    queryFn: () => getTodos(),
  });

  if (isFetching) {
    const result: UseGetTodoListResultLoading = {
      todoList: undefined,
      isFetching,
      isError: false,
    };
    return result;
  }

  if (isError) {
    const result: UseGetTodoListResultError = {
      todoList: undefined,
      isFetching: false,
      isError: true,
    };
    return result;
  }

  if (data) {
    const result: UseGetTodoListResultSuccess = {
      todoList: data,
      isFetching,
      isError: false,
    };
    return result;
  }

  const result: UseGetTodoListResultFail = {
    todoList: undefined,
    isFetching,
    isError,
  };

  return result;
};

export default useGetTodoList;
