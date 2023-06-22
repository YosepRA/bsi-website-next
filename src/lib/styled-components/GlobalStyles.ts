'use client';

import { createGlobalStyle } from 'styled-components';

import type { ThemeType } from 'lib/styled-components/ThemeProvider.tsx';

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
    color: ${({ theme }) => theme.colors.body.grey};

    &:last-child {
      margin-bottom: 0;
    }
  }

  // Bootstrap overrides
  .navbar-nav .nav-link.active {
    color: inherit;
    text-decoration: underline;
  }

  @media screen and (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding: 0 28px;
    }
  }
`;

export default GlobalStyles;
