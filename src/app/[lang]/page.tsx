import React from 'react';

import type { HomeProps } from 'types/home';
import getDictionary from 'utils/dictionary.ts';
import Banner from './home/Banner.tsx';
import Ecosystem from './home/Ecosystem.tsx';
import AIFlow from './home/AIFlow.tsx';
import Roadmap from './home/Roadmap.tsx';
import DownloadBSIBanner from './home/DownloadBSIBanner.tsx';
import Partnership from './home/Partnership.tsx';
import JoinUs from './home/JoinUs.tsx';

export default async function Home({ params: { lang } }: HomeProps) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Banner />
      <Ecosystem />
      <AIFlow />
      <Roadmap />
      <DownloadBSIBanner />
      <Partnership />
      <JoinUs />
    </>
  );
}
