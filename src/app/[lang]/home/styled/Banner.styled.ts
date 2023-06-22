import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const Banner = styled.section`
  padding-top: 70px;
  padding-bottom: 46px;

  .banner {
    &__row {
      align-items: center;
    }
  }

  @media screen and (${device.md}) {
    padding-bottom: 60px;
  }

  @media screen and (${device.lg}) {
    padding: 60px 0 74px;
  }
`;

export const BannerInfo = styled.div`
  .banner__info {
    &-title {
      margin-bottom: 20px;
      font-size: 45px;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      text-transform: uppercase;

      &--desktop {
        display: none;
      }
    }

    &-excerpt {
      margin-bottom: 20px;
      text-align: center;
      font-size: 17px;

      p {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &-social-media {
      &__row {
        width: 80%;
        margin: 0 auto;
        justify-content: center;
      }

      &__column {
        text-align: center;
      }

      &__item {
        display: inline-block;
        font-size: 28px;
        color: inherit;
      }
    }
  }

  @media screen and (${device.md}) {
    .banner__info {
      &-title {
        font-size: 52px;
      }

      &-excerpt {
        font-size: 20px;
      }
    }
  }

  @media screen and (${device.lg}) {
    .banner__info {
      &-title {
        margin-bottom: 29px;
        font-size: 72px;
        text-align: left;

        &--mobile {
          display: none;
        }

        &--desktop {
          display: block;
        }
      }

      &-excerpt {
        margin-bottom: 29px;
        text-align: left;
        font-size: 22px;
      }

      &-social-media {
        &__row {
          width: 80%;
          margin: 0;
          justify-content: flex-start;
        }

        &__column {
          text-align: center;

          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }
  }
`;

export const BannerImage = styled.div`
  margin-bottom: 48px;

  img {
    display: block;
    width: 90%;
    height: auto;
    margin: 0 auto;
  }

  @media screen and (${device.md}) {
    margin-bottom: 88px;

    img {
      width: 65%;
    }
  }

  @media screen and (${device.lg}) {
    margin-bottom: 0;

    img {
      width: 90%;
    }
  }
`;
