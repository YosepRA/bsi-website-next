import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  .page-footer {
    &__row {
      padding: 32px 0;

      &--one {
        padding-top: 40px;
        border-bottom: 2px solid #ddd;
      }

      &--two {
        justify-content: space-between;
      }
    }

    &__info {
      margin-bottom: 56px;

      &-logo {
        display: block;
        width: 160px;
        height: auto;
        margin-bottom: 16px;
      }

      &-excerpt {
        margin-bottom: 32px;
      }

      &-contact {
        margin-bottom: 0;
        color: ${({ theme }) => theme.colors.body.white};
      }
    }

    &__navigation {
      margin-bottom: 56px;

      &-title {
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 700;
      }

      &-list {
        padding-left: 0;

        &-item {
          list-style: none;

          &:not(:last-child) {
            margin-bottom: 12px;
          }

          a {
            color: inherit;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }

          &--whitepaper {
            svg {
              font-size: 0.8em;
            }
          }
        }
      }
    }

    &__media {
      &-title {
        margin-bottom: 8px;
        font-size: 16px;
      }

      &__audit {
        margin-bottom: 56px;

        &-logo {
          width: 205px;
          height: auto;
        }
      }

      &__listing {
        &-list {
          margin-bottom: 0;
          padding-left: 0;

          &-item {
            display: block;
            width: 100%;
            padding: 12px;
            background-color: ${({ theme }) => theme.colors.bg.primary};
            border-radius: 8px;
            text-align: center;
          }
        }
      }
    }

    &__social-media {
      margin-bottom: 42px;

      &__title {
        font-size: 18px;
        font-weight: 700;
      }

      &__list {
        padding-left: 0;

        &-item {
          display: inline-block;
          margin-right: 22px;
          list-style: none;
          font-size: 24px;

          a {
            display: inline-block;
            color: inherit;
            transition: all 200ms ease-out;

            &:hover {
              color: ${({ theme }) => theme.colors.primary.main};
              transform: scale(1.1);
            }
          }
        }
      }
    }

    &__smart-contract {
      &__link {
        color: ${({ theme }) => theme.colors.body.white};
        font-weight: 700;
      }
    }
  }

  @media screen and (${device.md}) {
    .page-footer {
      &__row {
        &--one {
          justify-content: space-between;
        }
      }

      &__social-media {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (${device.lg}) {
    .page-footer {
      &__info {
        margin-bottom: 0;

        &-logo {
          width: 240px;
        }

        &-excerpt {
          margin-bottom: 48px;
        }
      }

      &__navigation {
        margin-bottom: 0;

        &-title {
          margin-bottom: 24px;
          font-size: 24px;
        }
      }

      &__media {
        &__audit {
          margin-bottom: 37px;
        }
      }
    }
  }
`;

export const FooterCopyright = styled.div`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.bg.third};

  .page-footer__copyright {
    &-text {
      margin-bottom: 0;
      font-size: 11px;
      text-align: center;
      color: ${({ theme }) => theme.colors.body.white};
    }
  }

  @media screen and (${device.md}) {
    .page-footer__copyright {
      &-text {
        font-size: 13px;
      }
    }
  }
`;
