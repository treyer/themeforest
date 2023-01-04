import styled from "styled-components";

import { ButtonSimpleProps } from "./types";

type ButtonOutlinedProps = {
  width: number;
  height: number;
};

export const Button = styled.button<
  Omit<ButtonSimpleProps, "children" | "size">
>`
  box-sizing: border-box;
  box-shadow: ${({ theme, disabled }) =>
    disabled ? "none" : theme.shadows[0]};

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.primary};
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.primary};
  border-radius: ${({ theme }) => theme.radiuses[0]}px;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  user-select: none;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.helperBlue4};
    border: 1px solid
      ${({ theme, disabled }) =>
        disabled ? theme.colors.grey : theme.colors.helperBlue4};
  }

  &:active {
    box-shadow: none;

    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.primary};
  }
`;

export const ButtonOutlined = styled.button<ButtonOutlinedProps>`
  box-sizing: border-box;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radiuses[0]}px;

  cursor: pointer;
  user-select: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.helperBlue4};
    opacity: 0.8;
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.helperBlue4};
    opacity: 1;
  }
`;
