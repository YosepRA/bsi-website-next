import React from 'react';
import { Inter } from 'next/font/google';
// import { SSRProvider } from 'react-bootstrap';

import StyledThemeProvider from 'lib/styled-components/ThemeProvider.tsx';
import GlobalStyles from 'lib/styled-components/GlobalStyles.ts';
import MainNavbar from 'components/MainNavbar.tsx';
import Footer from 'components/Footer.tsx';
import locales from 'data/locales.ts';
import getDictionary from 'utils/dictionary.ts';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'styles/bootstrap-override.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bali Social Integrated',
  description: 'Bali Social Integrated official website.',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <StyledThemeProvider>
      <html lang={params.lang}>
        <body className={inter.className}>
          <GlobalStyles />

          <MainNavbar />

          <main className="main-container">{children}</main>

          <Footer />
        </body>
      </html>
    </StyledThemeProvider>
  );
}
