import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const Partnership = styled.section`
  padding: 32px 0;
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  .partnership {
    &__row {
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }

    &__title {
      margin-bottom: 28px;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }

    &__list {
      padding-left: 0;

      &-row {
        justify-content: center;
      }

      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 64px;
        padding: 16px;
        background-color: ${({ theme }) => theme.colors.primary.surface};
        border-radius: 8px;

        img {
          width: 90%;
          height: auto;
        }
      }
    }
  }

  @media screen and (${device.md}) {
    padding: 100px 0;

    .partnership {
      &__row {
        &:not(:last-child) {
          margin-bottom: 46px;
        }
      }

      &__title {
        font-size: 34px;
      }

      &__list {
        &-item {
          height: 82px;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    .partnership {
      &__title {
        font-size: 24px;
      }
    }
  }
`;

export const PartnershipIntro = styled.div`
  .partnership__intro {
    &-title {
      margin-bottom: 12px;
      font-size: 34px;
      font-weight: 700;
      text-align: center;
    }

    &-excerpt {
      text-align: center;

      p {
        font-size: 15px;
      }
    }
  }

  @media screen and (${device.md}) {
    .partnership__intro {
      &-title {
        margin-bottom: 16px;
        font-size: 40px;
      }

      &-excerpt {
        width: 90%;
        margin: 0 auto;

        p {
          font-size: 17px;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    .partnership__intro {
      &-title {
        margin-bottom: 24px;
        font-size: 48px;
      }

      &-excerpt {
        width: 75%;

        p {
          font-size: 20px;
        }
      }
    }
  }
`;

export const PartnershipSupported = styled.div``;

export const PartnershipStrategic = styled.div``;

export const PartnershipMedia = styled.div``;
