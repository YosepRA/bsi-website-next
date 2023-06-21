import styled, { css } from 'styled-components';

import type { RoadmapItemBodyProp } from 'types/home';
import device from 'lib/styled-components/device-breakpoints.ts';

export const RoadmapStyled = styled.section`
  padding: 42px 0 55px;

  .roadmap {
    &__title {
      margin-bottom: 40px;
      font-size: 34px;
      font-weight: 700;
      text-align: center;
    }
  }

  @media screen and (${device.lg}) {
    .roadmap {
      &__title {
        margin-bottom: 88px;
      }
    }
  }
`;

export const RoadmapYear = styled.article`
  display: block;

  &:not(:last-child) {
    margin-bottom: 88px;
  }

  @media screen and (${device.lg}) {
    &:not(:last-child) {
      margin-bottom: 120px;
    }
  }
`;

export const RoadmapTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  margin: 0 auto 48px;
  padding: 18px;
  border-radius: 72px;
  color: #fff;
  box-shadow: 0px 0px 15px #00dda4, inset 0px 0px 5px #00dda4;

  .roadmap__title-box {
    &__icon {
      margin-bottom: 24px;
    }

    &__title {
      text-align: center;
      font-weight: 700;
      font-size: 20px;
    }
  }

  @media screen and (${device.lg}) {
    width: 300px;
    height: 300px;
    border-radius: 20px;
  }
`;

export const RoadmapList = styled.div``;

export const RoadmapItem = styled.article`
  cursor: pointer;
`;

export const RoadmapItemToggle = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 16px 16px 16px 56px;
  background-color: ${({ theme }) => theme.colors.secondary.active};
  border: none;
  border-radius: 16px;
  color: white;
  transition: background-color 200ms ease-out;

  .roadmap__item {
    &-toggle {
      &__icon {
        position: absolute;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        background-color: ${({ theme }) => theme.colors.secondary.main};
        border-radius: 16px;
        font-size: 13px;
        text-transform: uppercase;
      }

      &__title {
        margin-left: 8px;
        margin-bottom: 0;
        font-size: 13px;
      }
    }
  }
`;

export const RoadmapItemBody = styled.ul<RoadmapItemBodyProp>`
  max-height: 0;
  margin-bottom: 0;
  /* padding: 0; */
  background-color: ${({ theme }) => theme.colors.bg.main};
  transition: all 300ms ease-out;
  overflow: hidden;
  border-radius: 16px;

  ${(props) =>
    props.open &&
    css`
      max-height: ${props.maxHeight && props.maxHeight + 32}px;
      padding: 16px 16px 16px 32px;
      border: 1px solid #fff;
    `}
`;
