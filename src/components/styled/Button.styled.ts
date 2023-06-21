import styled, { css } from 'styled-components';

interface ButtonProps {
  color?: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
  min-width: 180px;
  padding: 12px 16px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  transition: all 200ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #ddd;
  }

  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: ${props.theme.colors.primary.main};
      border: none;
      color: ${props.theme.colors.primary.active};

      &:hover {
        background-color: ${props.theme.colors.primary.hover};
        color: ${props.theme.colors.body.white};
      }

      &:active {
        background-color: ${props.theme.colors.primary.active};
        color: ${props.theme.colors.body.white};
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      background-color: ${props.theme.colors.secondary.main};
      border: none;
      color: ${props.theme.colors.secondary.active};

      &:hover {
        background-color: ${props.theme.colors.secondary.hover};
        color: ${props.theme.colors.body.white};
      }

      &:active {
        background-color: ${props.theme.colors.secondary.active};
        color: ${props.theme.colors.body.white};
      }
    `}
`;

export default Button;
