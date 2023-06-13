import React from 'react';
// import Image from 'next/image';

import type { HomeProps } from 'types/home';
import MainNavbar from 'components/MainNavbar.tsx';
import getDictionary from 'utils/dictionary.ts';

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);

  return (
    <>
      <MainNavbar />

      <h1>{dict.home.title}</h1>
    </>
  );
}
