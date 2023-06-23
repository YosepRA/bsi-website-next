import styled, { css } from 'styled-components';

import type {
  RoadmapTitleBoxProps,
  RoadmapItemToggleProps,
  RoadmapItemBodyProps,
} from 'types/home';
import device from 'lib/styled-components/device-breakpoints.ts';

export const RoadmapStyled = styled.section`
  padding: 42px 0 55px;

  .roadmap {
    &__intro {
      margin-bottom: 40px;

      &-title {
        margin-bottom: 16px;
        font-size: 34px;
        font-weight: 700;
        text-align: center;
      }

      &-excerpt {
        font-size: 15px;
        text-align: center;
      }
    }
  }

  @media screen and (${device.md}) {
    padding: 60px 0;

    .roadmap {
      &__intro {
        margin-bottom: 56px;

        &-title {
          font-size: 40px;
        }

        &-excerpt {
          width: 90%;
          margin: 0 auto;
          font-size: 17px;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    padding: 74px 0;

    .roadmap {
      &__intro {
        margin-bottom: 64px;

        &-title {
          margin-bottom: 24px;
          font-size: 48px;
        }

        &-excerpt {
          width: 75%;
        }
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
      margin-bottom: 134px;
    }

    .roadmap__year {
      &-row {
        justify-content: center;
      }
    }
  }
`;

export const RoadmapTitleBox = styled.div<RoadmapTitleBoxProps>`
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
  box-shadow: 0px 0px 15px ${({ theme, color }) => theme.colors[color].main},
    inset 0px 0px 5px ${({ theme, color }) => theme.colors[color].main};

  .roadmap__title-box {
    &__icon {
      margin-bottom: 24px;

      &-container {
        position: relative;
        width: 100px;
        height: 100px;
        margin-bottom: 18px;
      }
    }

    &__title {
      text-align: center;
      font-weight: 700;
      font-size: 20px;
    }
  }

  @media screen and (${device.md}) {
    width: 320px;
    height: 320px;

    .roadmap__title-box {
      &__icon {
        &-container {
          width: 120px;
          height: 120px;
        }
      }

      &__title {
        font-size: 28px;
      }
    }
  }

  @media screen and (${device.lg}) {
    width: 320px;
    height: 320px;
    margin-bottom: 0;
  }
`;

export const RoadmapList = styled.div``;

export const RoadmapItem = styled.article`
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (${device.md}) {
    width: 70%;
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @media screen and (${device.lg}) {
    width: 100%;
  }
`;

export const RoadmapItemToggle = styled.button<RoadmapItemToggleProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 16px 16px 16px 56px;
  background-color: ${({ theme, color }) => theme.colors[color].active};
  border: none;
  border-radius: 16px;
  color: white;
  transition: background-color 200ms ease-out, border-radius 300ms ease-out;

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
        background-color: ${({ theme, color }) => theme.colors[color].main};
        border-radius: 16px;
        font-size: 13px;
        text-transform: uppercase;

        &-wrapper {
          position: relative;
          width: 70%;
          height: 100%;
        }

        &-image {
          object-fit: contain;
        }
      }

      &__title {
        margin-left: 8px;
        margin-bottom: 0;
        font-size: 13px;
      }
    }
  }

  ${(props) =>
    props.open &&
    css`
      border-radius: 16px 16px 0 0;
    `}

  @media screen and (${device.md}) {
    .roadmap__item {
      &-toggle {
        &__title {
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (${device.lg}) {
    height: 64px;
    padding-left: 72px;

    .roadmap__item {
      &-toggle {
        &__icon {
          width: 64px;
          height: 64px;
        }

        &__title {
          font-size: 17px;
        }
      }
    }
  }
`;

export const RoadmapItemBody = styled.ul<RoadmapItemBodyProps>`
  max-height: 0;
  margin-bottom: 0;
  background-color: ${({ theme }) => theme.colors.bg.main};
  transition: all 300ms ease-out;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 0 0 16px 16px;

  ${(props) =>
    props.open &&
    css`
      max-height: ${props.maxHeight && props.maxHeight + 32}px;
      padding: 16px 16px 16px 32px;
    `}

  ${(props) =>
    props.open &&
    props.color === 'primary' &&
    css`
      background-color: ${props.theme.colors.primary.active};
      border-top: 1px solid ${props.theme.colors.primary.main};
    `}
    
  ${(props) =>
    props.open &&
    props.color === 'secondary' &&
    css`
      background-color: ${props.theme.colors.secondary.active};
      border-top: 1px solid ${props.theme.colors.secondary.main};
    `}
`;
