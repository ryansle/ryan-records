// Components
import { QueryClient, QueryClientProvider } from 'react-query';

// Types
import type { AppProps } from 'next/app';

// Utilities
import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
