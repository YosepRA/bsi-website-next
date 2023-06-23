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

  @media screen and (${device.md}) {
    padding: 60px 0 50px;
  }

  @media screen and (${device.lg}) {
    padding: 74px 0 80px;
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

  @media screen and (${device.md}) {
    margin-bottom: 64px;

    .ecosystem-bsi {
      &__logo {
        width: 31%;
        margin-bottom: 32px;
      }

      &__excerpt {
        width: 80%;
        margin: 0 auto;
        font-size: 15px;
      }
    }
  }

  @media screen and (${device.lg}) {
    .ecosystem-bsi {
      &__logo {
        width: 40%;
        margin-bottom: 36px;
      }

      &__excerpt {
        width: 100%;
        font-size: 16px;
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
      width: 88px;
      height: 42px;
      background-color: #5b259f;
      border-radius: 12px;

      h2 {
        display: inline;
        margin-bottom: 0;
        font-size: 12px;
        font-weight: 700;
      }

      &-wrapper {
        position: relative;
        width: 85%;
        height: 100%;
      }

      &-image {
        object-fit: contain;
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

  @media screen and (${device.md}) {
    width: 74%;
    margin-right: 32px;

    .ecosystem-card {
      &__icon {
        top: 50%;
        left: 0;
        width: 120px;
        height: 48px;
        transform: translate(-70%, -50%);

        &-wrapper {
          width: 80%;
        }
      }

      &__info {
        &-title {
          font-size: 22px;
        }

        &-excerpt {
          font-size: 15px;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    width: 80%;

    &:not(:last-child) {
      margin-bottom: 18px;
    }

    .ecosystem-card {
      &__info {
        &-excerpt {
          font-size: 16px;
        }
      }
    }
  }
`;
