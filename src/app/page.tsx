import { ROUTE } from '@/constants';
import { getQueryClient } from '@/services/queryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

function AppPage() {
  console.log('app - page - component');

  const queryClient = getQueryClient();

  return (
    <div id="app-page">
      <h1>Hello, Next.js!</h1>
        <Link href={ROUTE.TODO}>Todo</Link>
    </div>
  );
}

export default AppPage;
