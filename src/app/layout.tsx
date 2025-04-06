import React, { ReactNode } from 'react';

import DefaultLayout from '@/components/DefaultLayout';

import '@/styles/global.scss';
import QueryProvider from '@/components/QueryProvider';

interface RootLayoutProps {
  children: ReactNode;
}
function RootLayout({ children }: RootLayoutProps) {
  console.log('app - layout - component');

  return (
    <html lang="ko">
      <title>Life cycle with Debugging</title>
      <body>
        <QueryProvider>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </QueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;
