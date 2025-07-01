import Link from 'next/link';
import React from 'react';
import { ROUTE } from '@/constants';

function PagesMain() {
  return (
    <div id="page-main">
      <h1>Hello, Next.js!</h1>
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
      <hr />
      <ul>
        <h2>App Router</h2>
        <li>
          <Link href={ROUTE.INDEX}>App Router Index</Link>
        </li>
        <li>
          <Link href={ROUTE.TODO}>Todo</Link>
        </li>

      </ul>
    </div>
  );
}

export default PagesMain;
