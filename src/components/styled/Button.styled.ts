import styled, { css } from 'styled-components';

interface ButtonProps {}

const Button = styled.button`
  min-width: 180px;
  padding: 12px 16px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;
  transition: background-color 200ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #ddd;
  }
`;

export default Button;
