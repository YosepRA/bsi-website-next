import styled, { css } from 'styled-components';

import type { RoadmapItemBodyProp } from 'types/home';
import device from 'lib/styled-components/device-breakpoints.ts';

export const RoadmapStyled = styled.section`
  padding: 82px 0;

  .roadmap {
    &__title {
      margin-bottom: 40px;
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
    margin-bottom: 50px;
  }

  @media screen and (${device.lg}) {
    &:not(:last-child) {
      margin-bottom: 120px;
    }
  }
`;

export const RoadmapIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #ccc;
  margin: 0 auto;
  border-radius: 20px;

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
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  background-color: #eee;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: #ddd;
  }

  .roadmap__item {
    &-toggle {
      &__title {
        margin-left: 8px;
        margin-bottom: 0;
      }
    }
  }
`;

export const RoadmapItemBody = styled.ul<RoadmapItemBodyProp>`
  max-height: 0;
  margin-bottom: 0;
  background-color: white;
  transition: all 300ms ease-out;
  overflow: hidden;

  ${(props) =>
    props.open &&
    css`
      max-height: ${props.maxHeight}px;
    `}
`;
