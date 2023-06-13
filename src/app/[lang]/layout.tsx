import React from 'react';
import { Inter } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bali Social Integrated',
  description: 'Bali Social Integrated official website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
