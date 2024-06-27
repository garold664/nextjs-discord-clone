import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discord',
  description: 'Create channels, add friends, have fun!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
