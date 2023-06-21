import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const JoinUs = styled.section`
  padding: 56px 0 103px;

  .join-us {
    &__col {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    &__title {
      margin-bottom: 28px;
      font-size: 34px;
      font-weight: 700;
      text-align: center;
    }
  }

  @media screen and (${device.lg}) {
    .join-us {
      &__title {
        font-size: 40px;
      }
    }
  }
`;

export const JoinUsCard = styled.article`
  position: relative;
  width: 90%;
  margin-left: auto;
  /* padding: 27px 16px 16px 50px; */
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
      }
    }
  }
`;
