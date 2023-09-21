// Utilities
import './globals.css';
import { Inter } from 'next/font/google';

// Types
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ryan Records',
  description: 'A record label for Ryans, by Ryans.',
  openGraph: {
    url: 'https://ryan-records.vercel.app',
    title: 'Ryan Records',
    description: 'A record label for Ryans, by Ryans.',
    images: [
      {
        url: '/ryan-records.jpg',
        width: 1400,
        height: 1400,
        alt: 'Ryan Records',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
