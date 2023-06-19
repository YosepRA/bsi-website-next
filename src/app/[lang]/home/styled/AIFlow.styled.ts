import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const AIFlowStyled = styled.section`
  @media screen and (${device.lg}) {
    padding: 48px 0 82px;
  }
`;

export const AIFlowCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  background-color: white;
  border: 2px solid #dddddd;
  border-radius: 16px;

  .ai-flow__card {
    &-title {
      margin-top: 16px;
      font-weight: 700;
    }
  }

  @media screen and (${device.lg}) {
    width: 90%;
    margin: 0 auto;
  }
`;
