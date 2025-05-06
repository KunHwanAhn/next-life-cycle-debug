import { QueryClient } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 1000 * 60;

// eslint-disable-next-line import/prefer-default-export
export const createQueryClient = (staleTime: number = DEFAULT_STALE_TIME): QueryClient => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime,
    },
  },
});
