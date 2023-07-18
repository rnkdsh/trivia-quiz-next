'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import store from '../store';

const inter = Inter({ subsets: ['latin'] });

// Create a client
const queryClient = new QueryClient();

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
        </body>
      </QueryClientProvider>
    </Provider>
  );
}
