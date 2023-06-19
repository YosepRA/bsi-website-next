import styled, { css } from 'styled-components';

import device from 'lib/styled-components/device-breakpoints.ts';

interface DemoImageProps {
  width?: number;
  height?: number;
  center?: boolean;
}

const DemoImage = styled.div<DemoImageProps>`
  @media screen and (${device.lg}) {
    width: ${(props) => (props.width ? `${props.width}px` : '240px')};
    height: ${(props) => (props.height ? `${props.height}px` : '240px')};
    background-color: #aaa;
    border-radius: 10px;

    ${(props) =>
      props.center &&
      css`
        margin: 0 auto;
      `}
  }
`;

export default DemoImage;
