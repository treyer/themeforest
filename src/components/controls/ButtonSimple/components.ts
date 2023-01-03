import styled from "styled-components";

import { ButtonSimpleProps } from "./types";

const BUTTON_SIZES = {
  big: { width: 190, height: 54 },
  small: { width: 137, height: 44 },
};

export const Button = styled.button<Omit<ButtonSimpleProps, "children">>`
  box-sizing: border-box;

  width: ${({ size }) =>
    BUTTON_SIZES[size as keyof typeof BUTTON_SIZES].width}px;
  height: ${({ size }) =>
    BUTTON_SIZES[size as keyof typeof BUTTON_SIZES].height}px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.primary};
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.primary};
  border-radius: ${({ theme }) => theme.radiuses[0]}px;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.helperBlue4};
    border: 1px solid
      ${({ theme, disabled }) =>
        disabled ? theme.colors.grey : theme.colors.helperBlue4};
  }

  &:active {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.primary};
  }
`;
