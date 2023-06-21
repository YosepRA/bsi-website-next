import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const EcosystemStyled = styled.section`
  padding-top: 46px;
  padding-bottom: 36px;

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
  margin-bottom: 40px;

  .ecosystem-bsi {
    &__logo {
      display: block;
      width: 60%;
      height: auto;
      margin: 0 auto 24px;
    }

    &__excerpt {
      margin-bottom: 0;
      text-align: center;
      font-size: 13px;
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

export const EcosystemMembers = styled.div``;

export const EcosystemCard = styled.article`
  position: relative;
  width: 90%;
  margin: 0 0 0 auto;
  padding: 16px 16px 16px 60px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 16px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  .ecosystem-card {
    &__row {
      align-items: center;
    }

    &__icon {
      position: absolute;
      top: 15%;
      left: -10%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 25%;
      padding: 16px;
      background-color: #5b259f;
      border-radius: 12px;

      h2 {
        display: inline;
        margin-bottom: 0;
        font-size: 12px;
      }
    }

    &__info {
      &-title {
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
      }

      &-excerpt {
        margin-bottom: 0;
        font-size: 13px;
        word-wrap: break-word;
      }
    }
  }
`;
