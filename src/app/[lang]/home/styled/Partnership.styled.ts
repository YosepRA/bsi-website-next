import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const Partnership = styled.section`
  padding: 44px 0 52px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  img {
    width: 80%;
    height: auto;
  }

  .partnership {
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
        min-height: 60px;
        background-color: #ccc;
        border-radius: 8px;
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

export const PartnershipSupported = styled.div`
  margin-bottom: 72px;
`;

export const PartnershipStrategic = styled.div`
  margin-bottom: 72px;
`;

export const PartnershipMedia = styled.div``;
