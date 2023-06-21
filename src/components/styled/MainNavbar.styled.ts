import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

import device from 'lib/styled-components/device-breakpoints.ts';

export const MainNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  color: ${({ theme }) => theme.colors.body.white};

  .main-navbar {
    &__brand {
      &-logo {
        width: 86px;
        height: auto;
      }
    }

    &__controls {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &__toggle {
      border: 2px solid white;
      color: white;
    }

    &__collapse {
      position: absolute;
      top: 56px;
      left: 0;
      width: 100%;
      padding: 0 16px;
      background-color: #5e5e66;
    }

    &__nav {
      width: 100%;
      justify-content: flex-end;

      &-link {
        padding: 24px 0;
        color: inherit;
        font-weight: 700;

        &:not(:last-child) {
          border-bottom: 1px solid white;
        }

        &--join-us {
          padding-bottom: 0;
          border-bottom: none !important;
        }

        &__whitepaper {
          display: block;
          width: 100%;
          padding: 14px 32px;
          background-color: #fff;
          border-radius: 12px;
          color: ${({ theme }) => theme.colors.body.black};
          text-align: center;
          font-weight: 700;
          transition: all 200ms ease-out;

          &:hover {
            background-color: ${({ theme }) => theme.colors.primary.surface};
          }

          &:active {
            background-color: ${({ theme }) => theme.colors.body.grey};
            color: #fff;
          }
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    .main-navbar {
      &__brand {
        &-logo {
          width: 174px;
        }
      }

      &__nav {
        &-link {
          padding-left: 16px;
          padding-right: 16px;
        }
      }
    }
  }
`;

export const LangSwitch = styled.div``;
