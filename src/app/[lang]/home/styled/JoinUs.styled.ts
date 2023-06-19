import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const JoinUs = styled.section`
  padding: 82px 0;

  .join-us {
    &__title {
      font-size: 40px;
      font-weight: 700;
    }
  }
`;

export const JoinUsCard = styled.article`
  padding: 16px;
  background-color: #fdfdfd;
  border: 2px solid #dddddd;
  border-radius: 16px;

  .join-us__card {
    &-meta {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }

    &-title {
      margin-bottom: 0;
      margin-left: 8px;
      font-size: 24px;
      text-transform: uppercase;
    }

    &-body {
      margin-bottom: 36px;
    }

    &-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;
