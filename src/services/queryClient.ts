import { QueryClient } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 1000 * 60;

export const createQueryClient = (): QueryClient => new QueryClient();

export const createQueryClientWithStaleTime = (): QueryClient => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE_TIME,
    },
  },
});
