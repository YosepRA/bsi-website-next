import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const Partnership = styled.section`
  padding: 82px 0;

  .partnership {
    &__title {
      margin-bottom: 24px;
      font-size: 24px;
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
        height: 60px;
        background-color: #ccc;
        border-radius: 8px;
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
