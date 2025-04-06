import { ROUTE } from '@/constants';
import Link from 'next/link';
import React from 'react';

function AppPage() {
  console.log('app - page - component');

  return (
    <div id="app-page">
      <h1>Hello, Next.js!</h1>
      <Link href={ROUTE.TODO}>Todo</Link>
    </div>
  );
}

export default AppPage;
