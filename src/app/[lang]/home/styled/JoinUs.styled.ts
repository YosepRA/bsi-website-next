import styled, { css } from 'styled-components';

import type { JoinUsCardStyledProps } from 'types/home.d.ts';
import device from 'lib/styled-components/device-breakpoints.ts';

export const JoinUs = styled.section`
  padding: 56px 0 103px;

  .join-us {
    &__col {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    &__intro {
      margin-bottom: 28px;

      &-title {
        margin-bottom: 16px;
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
  }

  @media screen and (${device.md}) {
    padding: 120px 0 76px;

    .join-us {
      &__intro {
        margin-bottom: 48px;

        &-excerpt {
          font-size: 17px;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    padding: 148px 0 114px;

    .join-us {
      &__intro {
        &-title {
          margin-bottom: 24px;
          font-size: 48px;
        }

        &-excerpt {
          width: 75%;
          margin: 0 auto;

          p {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export const JoinUsCard = styled.article<JoinUsCardStyledProps>`
  position: relative;
  width: 90%;
  margin-left: auto;
  padding: 27px 16px 16px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 16px;
  color: #fff;

  .join-us__card {
    &-meta {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      padding-left: 34px;
    }

    &-icon {
      position: absolute;
      top: 16px;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      background-color: ${({ theme }) => theme.colors.secondary.main};
      border-radius: 16px;
      transform: translateX(-50%);

      &__wrapper {
        position: relative;
        width: 70%;
        height: 100%;
      }

      &__image {
        object-fit: contain;
      }
    }

    &-title {
      margin-bottom: 0;
      font-size: 22px;
      font-weight: 700;
    }

    &-body {
      margin-bottom: 36px;
      padding-left: 34px;
    }

    &-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &__button {
        width: 100%;
        font-weight: 700;
      }
    }
  }

  ${(props) =>
    props.color === 'primary' &&
    css`
      .join-us__card {
        &-icon {
          background-color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      .join-us__card {
        &-icon {
          background-color: ${({ theme }) => theme.colors.secondary.main};
        }
      }
    `}

  @media screen and (${device.md}) {
    width: 65%;
    margin: 0 auto;
    padding-top: 45px;

    .join-us__card {
      &-icon {
        width: 80px;
        height: 80px;
        top: 20px;
        left: 0;
        transform: translateX(-60%);

        img {
          width: 75%;
          height: auto;
        }
      }

      &-title {
        font-size: 28px;
      }

      &-footer {
        &__button {
          width: 200px;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    width: 84%;
    padding-top: 35px;

    .join-us__card {
      &-body {
        margin-bottom: 43px;
      }
    }
  }
`;
