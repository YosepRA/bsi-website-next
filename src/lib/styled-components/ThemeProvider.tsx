'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: {
      main: '#01C2E7',
      hover: '#006E98',
      active: '#013742',
      outline: '#D6F8FF',
    },
    secondary: {
      main: '#00DDA4',
      hover: '#036C46',
      active: '#1D3D34',
    },
    body: {
      white: '#fff',
      grey: '#aaa',
    },
    bg: {
      primary: '#212A37',
      secondary: '#1D1D29',
    },
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
