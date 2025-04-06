'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 1000 * 60;

interface QueryClientProviderProps {
  children: React.ReactNode;
}
export default function QueryProvider({ children }: QueryClientProviderProps) {
  console.log('components - QueryProvider');

  const [queryClient] = useState<QueryClient>(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_STALE_TIME,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
