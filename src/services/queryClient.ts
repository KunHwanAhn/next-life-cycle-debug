import { QueryClient, isServer } from '@tanstack/react-query';
import { cache } from 'react';

const DEFAULT_STALE_TIME = 1000 * 60;

export const createQueryClient = cache(() => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE_TIME,
    },
  },
}));

let browserQueryClient: QueryClient | undefined;

export const getQueryClient = () => {
  if (isServer) {
    return createQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = createQueryClient();
  }
  return browserQueryClient;
};
