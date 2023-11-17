// Components
import { QueryClient, QueryClientProvider } from 'react-query';
import { DefaultSeo } from 'next-seo';

// Types
import type { AppProps } from 'next/app';

// Utilities
import '@/styles/globals.css';
import seo from '@/seo.config';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
