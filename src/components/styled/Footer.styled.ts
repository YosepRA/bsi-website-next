import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const Footer = styled.footer`
  /* padding: 64px 0 0; */
  background-color: #f4f4f4;

  .page-footer {
    &__row {
      padding: 34px 0;

      &--one {
        padding-top: 64px;
        border-bottom: 2px solid #ddd;
      }

      &--two {
        justify-content: space-between;
      }
    }

    &__info {
      &-logo {
        display: block;
        width: 240px;
        height: auto;
        margin-bottom: 16px;
      }

      &-excerpt {
        margin-bottom: 48px;
      }

      &-contact {
        margin-bottom: 0;
      }
    }

    &__navigation {
      &-title {
        margin-bottom: 24px;
        font-size: 24px;
        font-weight: 600;
      }

      &-list {
        padding-left: 0;

        &-item {
          list-style: none;

          a {
            color: inherit;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
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
        margin-bottom: 29px;

        &-box {
          width: 180px;
          padding: 12px;
          background-color: #ddd;
          text-align: center;
          border-radius: 12px;
        }
      }

      &__listing {
        &-list {
          padding-left: 0;

          &-item {
            width: 100%;
            padding: 12px;
            background-color: #ddd;
            border-radius: 12px;
            text-align: center;
          }
        }
      }
    }

    &__social-media {
      &__title {
        font-size: 18px;
        font-weight: 700;
      }
    }

    &__smart-contract {
      &__link {
        color: inherit;
        font-weight: 700;
      }
    }
  }
`;

export const FooterCopyright = styled.div`
  padding: 16px 0;
  background-color: #ddd;

  .page-footer__copyright {
    &-text {
      margin-bottom: 0;
      font-size: 14px;
      text-align: center;
    }
  }
`;
