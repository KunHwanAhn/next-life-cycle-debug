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

interface AppCommonProps {
  dehydrateState: DehydratedState;
}
function RootApp({ Component, pageProps }: AppProps<AppCommonProps>) {
  const [queryClient] = React.useState(() => createQueryClient());

  const { dehydrateState, ...componentProps } = pageProps;

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

export default RootApp;
