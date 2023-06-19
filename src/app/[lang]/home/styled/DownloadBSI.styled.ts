import styled from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

export const DownloadBSI = styled.section`
  padding: 82px 0;

  .download-bsi {
    &__row {
      align-items: center;
    }
  }
`;

export const DownloadBSIImage = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background-color: #ccc;
  border-radius: 20px;
`;

export const DownloadBSIInfo = styled.div`
  .download-bsi__info {
    &-title {
      font-size: 56px;
      font-weight: 700;
      text-transform: uppercase;
    }

    &-excerpt {
      margin-bottom: 96px;
    }

    &__download {
      &-title {
        margin-bottom: 8px;
      }

      &-item {
        display: inline-block;
        margin-right: 24px;

        img {
          width: 176px;
          height: auto;
        }
      }
    }
  }
`;
