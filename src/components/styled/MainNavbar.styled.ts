import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
      align-items: center;
    }

    &__toggle {
      border: none;
      color: #fff;
    }

    &__collapse {
      position: absolute;
      top: 56px;
      left: 0;
      width: 100%;
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

        &:hover {
          text-decoration: underline;
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
          line-height: 1;
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

  @media screen and (${device.md}) {
    .main-navbar {
      &__nav {
        &-link {
          &--whitepaper {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          &__whitepaper {
            width: 320px;
            padding: 14px 32px;
          }
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    padding: 16px 0;

    .main-navbar {
      &__brand {
        padding: 0;

        &-logo {
          width: 174px;
        }
      }

      &__controls {
        order: 2;
      }

      &__collapse {
        position: static;
        background-color: ${({ theme }) => theme.colors.bg.secondary};

        .container {
          padding: 0;
        }
      }

      &__nav {
        align-items: center;

        &-link {
          padding: 0 28px;

          &:not(:last-child) {
            border: none;
          }

          &--whitepaper {
            padding: 0 39px;
          }

          &__whitepaper {
            width: 159px;
            padding: 14px 32px;
          }
        }
      }
    }
  }

  @media screen and (${device.xl}) {
    .container {
      max-width: 1266px;
    }
  }
`;

export const LangSwitch = styled(NavDropdown)`
  display: flex;
  justify-content: center;
  align-items: center;

  .dropdown-menu {
    left: -100px;
    background-color: ${({ theme }) => theme.colors.bg.secondary};
  }

  .dropdown-toggle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .main-navbar__lang-switch {
    &__item {
      color: ${({ theme }) => theme.colors.body.white};
      background-color: ${({ theme }) => theme.colors.bg.secondary};
      transition: all 200ms ease-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.bg.primary};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.bg.third};
      }
    }
  }
`;

export const LangSwitchTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .main-navbar__lang-switch__title {
    &-flag {
      display: inline-flex;
      align-items: center;

      img {
        width: 25px;
        height: auto;
      }
    }

    &-name {
      display: inline-block;
      margin-left: 4px;
      font-weight: 700;
    }
  }
`;
