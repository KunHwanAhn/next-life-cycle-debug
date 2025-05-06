import React, { ReactNode } from 'react';

import DefaultLayout from '@/components/DefaultLayout';

import '@/styles/global.scss';
import QueryProvider from '@/components/QueryProvider';
import { notoSansKR, roboto } from '@/utils/fonts';

interface RootLayoutProps {
  children: ReactNode;
}
function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={`${roboto.variable} ${notoSansKR.variable}`}>
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
