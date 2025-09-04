import React from 'react';
import { AppProps } from 'next/app';
import {
  DehydratedState, HydrationBoundary, QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DefaultLayout from '@/components/DefaultLayout/DefaultLayout';

import '@/styles/global.scss';
import { notoSansKR, roboto } from '@/utils/fonts';
import { createQueryClient } from '@/services/queryClient';
import { NextPageContext } from 'next';

interface AppCommonProps {
  dehydrateState: DehydratedState;
  appProp1: string;
  appProp2: string;
}
function RootApp({
  Component, pageProps,
}: AppProps<AppCommonProps>) {
  const [queryClient] = React.useState(() => createQueryClient());

  const {
    dehydrateState, appProp1, appProp2, ...componentProps
  } = pageProps;

  return (
    <main className={`${roboto.className} ${notoSansKR.className}`}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <HydrationBoundary state={dehydrateState}>
          <DefaultLayout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...componentProps} />
          </DefaultLayout>
        </HydrationBoundary>
      </QueryClientProvider>
    </main>
  );
}

RootApp.getInitialProps = async ({ asPath }: NextPageContext) => {
  console.log('App getInitialProps', asPath);

  return {
    pageProps: {
      appProp1: 'value1',
      appProp2: 'value2',
    },
  };
};

export default RootApp;
