import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const Banner = styled.section`
  padding-top: 70px;
  padding-bottom: 46px;

  .banner {
    &__row {
      align-items: center;
    }

    &__info {
      &-title {
        margin-bottom: 20px;
        font-size: 45px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
      }

      &-excerpt {
        text-align: center;
        font-size: 17px;
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

    &__image {
      margin-bottom: 48px;

      img {
        display: block;
        width: 90%;
        height: auto;
        margin: 0 auto;
      }
    }
  }

  @media screen and (${device.lg}) {
    padding: 82px 0;
  }
`;

export const BannerInfo = styled.div`
  h1 {
    font-weight: bold;
    line-height: 1;
  }

  @media screen and (${device.lg}) {
    h1 {
      margin-bottom: 30px;
      font-size: 64px;
    }
  }
`;

export const BannerImage = styled.div``;
