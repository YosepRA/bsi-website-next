'use client';

import { createGlobalStyle } from 'styled-components';

import type { ThemeType } from 'lib/styled-components/ThemeProvider.tsx';
import device from './device-breakpoints.ts';

interface GlobalProps {
  theme: ThemeType;
}

const GlobalStyles = createGlobalStyle<GlobalProps>`
  * {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.body.white};
  }

  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.body.grey};

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (${device.md}) {
      font-size: 15px;
    }

    @media screen and (${device.xl}) {
      font-size: 16px;
    }
  }

  // Bootstrap overrides
  .navbar-nav .nav-link.active {
    color: inherit;
    text-decoration: underline;
  }

  @media screen and (${device.lg}) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding: 0 14px;
    }
  }

  @media screen and (${device.xl}) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding: 0 28px;
    }
  }
`;

export default GlobalStyles;
