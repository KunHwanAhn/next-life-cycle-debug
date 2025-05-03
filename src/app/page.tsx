import { ROUTE } from '@/constants';
import Link from 'next/link';
import React from 'react';

function AppPage() {
  return (
    <div id="app-main">
      <h1>Hello, Next.js!</h1>
      <Link href={ROUTE.TODO}>Todo</Link>
    </div>
  );
}

export default AppPage;
