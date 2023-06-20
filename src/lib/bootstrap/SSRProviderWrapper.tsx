'use client';

import React from 'react';
import { SSRProvider } from 'react-bootstrap';

const SSRProviderWrapper = function SSRProviderWrapperComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SSRProvider>{children}</SSRProvider>;
};

export default SSRProviderWrapper;
