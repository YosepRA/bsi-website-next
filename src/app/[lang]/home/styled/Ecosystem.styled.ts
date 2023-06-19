import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const EcosystemStyled = styled.section`
  .ecosystem {
    &__row {
      align-items: center;
    }
  }

  @media screen and (${device.lg}) {
    padding: 82px 0;
  }
`;

export const EcosystemBSI = styled.div`
  .ecosystem-bsi {
    &__logo {
      display: block;
      width: 80%;
      height: auto;
      margin: 0 auto 56px;
    }

    &__excerpt {
      margin-bottom: 0;
      text-align: center;
    }
  }

  @media screen and (${device.lg}) {
    .ecosystem-bsi {
      &__logo {
        width: 56%;
        margin-bottom: 56px;
      }
    }
  }
`;

export const EcosystemCard = styled.article`
  padding: 16px;
  background-color: #eeeeee;
  border-radius: 16px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  .ecosystem-card {
    &__row {
      align-items: center;
    }

    &__info {
      &-title {
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
      }

      &-excerpt {
        margin-bottom: 0;
      }
    }
  }
`;
