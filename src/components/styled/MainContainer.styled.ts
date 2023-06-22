'use client';

import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

const MainContainer = styled.main`
  padding-top: 56px;

  @media screen and (${device.lg}) {
    padding-top: 80px;
  }
`;

export default MainContainer;
