// 'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import MainContainer from './components/MainContainer';

export const metadata: Metadata = {
  title: 'TRIVIA',
  description:
    'Challenge your knowledge with our captivating TRIVIA quiz app and discover the joy of learning through fun and exciting questions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <MainContainer>{children}</MainContainer>
      <Analytics />
    </html>
  );
}
