import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

import device from 'lib/styled-components/device-breakpoints.ts';

export const MainNavbar = styled(Navbar)`
  .main-navbar {
    &__brand {
      &-logo {
        width: 174px;
        height: auto;
      }
    }

    &__nav {
      width: 100%;
      justify-content: flex-end;

      &-link {
        padding-left: 16px;
        padding-right: 16px;

        &--whitepaper {
          width: 140px;
          background-color: #ddd;
          border-radius: 8px;
          text-align: center;
        }
      }
    }
  }
`;

export const LangSwitch = styled.div``;
