import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const Banner = styled.section`
  .banner {
    &__row {
      align-items: center;
    }
  }

  @media screen and (${device.lg}) {
    padding: 82px 0;
  }
`;

export const BannerInfo = styled.div`
  h1 {
    font-weight: bold;
    line-height: 1;
  }

  @media screen and (${device.lg}) {
    h1 {
      margin-bottom: 30px;
      font-size: 64px;
    }
  }
`;

export const BannerImage = styled.div``;
