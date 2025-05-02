'use client';

import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '@/services/queryClient';

interface QueryClientProviderProps {
  children: React.ReactNode;
}
export default function QueryProvider({ children }: QueryClientProviderProps) {
  console.log('components - QueryProvider');

  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
