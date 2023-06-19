'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // Bootstrap overrides
  @media screen and (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;

export default GlobalStyles;
