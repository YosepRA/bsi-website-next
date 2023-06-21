import React from 'react';
import { Oxygen, Inter } from 'next/font/google';

import SSRProviderWrapper from 'lib/bootstrap/SSRProviderWrapper.tsx';
import StyledComponentRegistry from 'lib/styled-components/Registry.tsx';
import StyledThemeProvider from 'lib/styled-components/ThemeProvider.tsx';
import GlobalStyles from 'lib/styled-components/GlobalStyles.ts';
import { DictionaryProvider } from 'components/context/Dictionary.context.tsx';
import MainNavbar from 'components/MainNavbar.tsx';
import MainContainer from 'components/styled/MainContainer.styled.ts';
import Footer from 'components/Footer.tsx';
import locales from 'data/locales.ts';
import getDictionary from 'utils/dictionary.ts';

import 'bootstrap/dist/css/bootstrap.min.css';

const oxygen = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'] });

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
    <SSRProviderWrapper>
      <StyledComponentRegistry>
        <StyledThemeProvider>
          <DictionaryProvider dict={dict}>
            <html lang={params.lang}>
              <body className={oxygen.className}>
                <GlobalStyles />

                <MainNavbar />

                <MainContainer className="main-container">
                  {children}
                </MainContainer>

                <Footer />
              </body>
            </html>
          </DictionaryProvider>
        </StyledThemeProvider>
      </StyledComponentRegistry>
    </SSRProviderWrapper>
  );
}
