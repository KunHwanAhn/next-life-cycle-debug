import { ROUTE } from '@/constants';
import Link from 'next/link';
import React from 'react';

function AppPage() {
  return (
    <div id="app-main">
      <h1>Hello, Next.js!</h1>
      <hr />
      <ul>
        <li>
          <Link href={ROUTE.INDEX}>App Router Index</Link>
        </li>
        <li>
          <Link href={ROUTE.TODO}>Todo</Link>
        </li>
      </ul>
      <hr />
      <h2>Page Router</h2>
      <ul>
        <li>
          <Link href={ROUTE.PAGE.INDEX}>Page Router Index</Link>
        </li>
        <li>
          <Link href={ROUTE.PAGE.TODO}>Todo</Link>
        </li>
        <li>
          <Link href={ROUTE.PAGE.TABS}>Tabs</Link>
        </li>
      </ul>
    </div>
  );
}

export default AppPage;
