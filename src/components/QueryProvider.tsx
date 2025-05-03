'use client';

import React, { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createQueryClientWithStaleTime } from '@/services/queryClient';

interface QueryClientProviderProps {
  children: React.ReactNode;
}
export default function QueryProvider({ children }: QueryClientProviderProps) {
  const [queryClient] = useState(() => createQueryClientWithStaleTime());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
