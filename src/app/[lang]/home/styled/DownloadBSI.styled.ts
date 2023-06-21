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
          width: 141px;
          height: auto;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    .download-bsi__info {
      &-title {
        font-size: 56px;
      }

      &-excerpt {
        margin-bottom: 96px;
      }

      &__download {
        &-item {
          display: inline-block;
          margin-right: 24px;

          img {
            width: 176px;
            height: auto;
          }
        }
      }
    }
  }
`;
