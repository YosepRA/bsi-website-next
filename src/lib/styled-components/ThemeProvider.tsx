'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeType {
  colors: {
    primary: {
      main: string;
      hover: string;
      active: string;
      surface: string;
    };
    secondary: {
      main: string;
      hover: string;
      active: string;
    };
    body: {
      white: string;
      grey: string;
    };
    bg: {
      primary: string;
      secondary: string;
      third: string;
    };
  };
}

const theme = {
  colors: {
    primary: {
      main: '#01C2E7',
      hover: '#006E98',
      active: '#013742',
      surface: '#D6F8FF',
    },
    secondary: {
      main: '#00DDA4',
      hover: '#036C46',
      active: '#1D3D34',
    },
    body: {
      white: '#fff',
      grey: '#aaa',
      black: '#303030',
    },
    bg: {
      primary: '#212A37',
      secondary: '#1D1D29',
      third: '#101017',
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

export type { ThemeType };

export default StyledThemeProvider;
