import styled from "styled-components";

import { ButtonSimpleMode } from "types/index";
import { ButtonOutlinedProps, ButtonSimpleProps } from "./types";

export const Button = styled.button<
  Omit<ButtonSimpleProps, "children" | "size">
>`
  box-sizing: border-box;
  box-shadow: ${({ theme, disabled }) =>
    disabled ? "none" : theme.shadows[0]};

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background-color: ${({ theme, disabled, mode }) =>
    disabled
      ? theme.colors.gray
      : mode === ButtonSimpleMode.Dark
      ? theme.colors.white
      : theme.colors.primary};
  border: 1px solid
    ${({ theme, disabled, mode }) =>
      disabled
        ? theme.colors.gray
        : mode === ButtonSimpleMode.Dark
        ? theme.colors.white
        : theme.colors.primary};
  border-radius: ${({ theme }) => theme.radiuses[0]}px;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  user-select: none;

  &:hover {
    background-color: ${({ theme, disabled, mode }) =>
      disabled
        ? theme.colors.gray
        : mode === ButtonSimpleMode.Dark
        ? theme.colors.white
        : theme.colors.helperBlue4};
    border: 1px solid
      ${({ theme, disabled }) =>
        disabled ? theme.colors.gray : theme.colors.helperBlue4};
  }

  &:active {
    box-shadow: none;

    background-color: ${({ theme, disabled, mode }) =>
      disabled
        ? theme.colors.gray
        : mode === ButtonSimpleMode.Dark
        ? theme.colors.white
        : theme.colors.helperBlue4};
  }
`;

export const ButtonOutlined = styled.button<ButtonOutlinedProps>`
  box-sizing: border-box;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background-color: ${({ theme, mode }) =>
    mode === ButtonSimpleMode.Dark ? theme.colors.primary : theme.colors.white};
  border: 1px solid
    ${({ theme, mode }) =>
      mode === ButtonSimpleMode.Dark
        ? theme.colors.white
        : theme.colors.primary};
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
