import Link from 'next/link';
import React from 'react';
import { ROUTE } from '@/constants';

function PagesMain() {
  return (
    <div id="page-main">
      <h1>Hello, Next.js!</h1>
      <Link href={ROUTE.PAGE.TODO}>Todo</Link>
    </div>
  );
}

export default PagesMain;
