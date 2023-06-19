'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    body: '#232323',
  },
};

const StyledThemeProvider = function StyledThemeProviderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
