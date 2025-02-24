import DefaultLayout from '@/components/DefaultLayout';
import React, { PropsWithChildren } from 'react';

import '@/styles/global.scss';

interface RootLayoutProps extends PropsWithChildren {}
function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </body>
    </html>
  );
}

export default RootLayout;
