import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const AIFlow = styled.section`
  padding-top: 36px;
  padding-bottom: 42px;

  .ai-flow {
    &__col {
      &:last-child {
        .ai-flow__card {
          margin-bottom: 0;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    padding: 48px 0 82px;
  }
`;

export const AIFlowCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 24px;
  padding: 64px 16px 16px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 16px;

  .ai-flow__card {
    &-icon {
      position: absolute;
      top: -10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      background-color: #5b259f;
      border-radius: 16px;
      color: #fff;

      h2 {
        margin-bottom: 0;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    &-title {
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }

    &-excerpt {
      p {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    width: 90%;
    margin: 0 auto;
  }
`;
