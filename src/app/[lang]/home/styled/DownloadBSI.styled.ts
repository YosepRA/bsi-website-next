import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const DownloadBSI = styled.section`
  padding: 55px 0 44px;

  .download-bsi {
    &__row {
      align-items: center;
    }

    &__image {
      display: block;
      width: 100%;
      height: auto;
      margin: 0 auto 48px;
    }
  }

  @media screen and (${device.md}) {
    padding: 60px 0 120px;

    .download-bsi {
      &__image {
        width: 64%;
      }
    }
  }

  @media screen and (${device.lg}) {
    padding: 74px 0 148px;

    .download-bsi {
      &__image {
        width: 90%;
      }
    }
  }
`;

export const DownloadBSIInfo = styled.div`
  .download-bsi__info {
    &-title {
      margin-bottom: 16px;
      font-size: 34px;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
    }

    &-excerpt {
      margin-bottom: 28px;
      font-size: 13px;
      text-align: center;
    }

    &__download {
      &-title {
        margin-bottom: 10px;
        text-align: center;
        font-size: 15px;
        color: ${({ theme }) => theme.colors.body.white};
        font-weight: 700;
      }

      &-list {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-item {
        display: block;
        margin: 0 12px;

        img {
          width: 142px;
          height: auto;
        }
      }
    }
  }

  @media screen and (${device.md}) {
    .download-bsi__info {
      &-excerpt {
        margin-bottom: 48px;
        font-size: 15px;
      }

      &__download {
        &-title {
          font-size: 15px;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    .download-bsi__info {
      &-title {
        font-size: 56px;
        text-align: left;
      }

      &-excerpt {
        margin-bottom: 96px;
        text-align: left;
        font-size: 16px;
      }

      &__download {
        &-title {
          margin-bottom: 10px;
          text-align: left;
          font-size: 16px;
        }

        &-list {
          justify-content: flex-start;
        }

        &-item {
          display: inline-block;
          margin: 0 24px 0 0;

          img {
            width: 176px;
            height: auto;
          }
        }
      }
    }
  }
`;
