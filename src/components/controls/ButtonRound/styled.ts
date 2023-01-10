import styled from "styled-components";
import { ButtonRoundProps } from "./types";

const BUTTON_SIZES = {
  big: 120,
  small: 90,
};

const BORDER_SIZES = {
  big: 104,
  small: 80,
};

const BORDER_POSITIONS = {
  big: { top: 6, left: 6 },
  small: { top: 3, left: 3 },
};

export const Button = styled.button<Omit<ButtonRoundProps, "children">>`
  position: relative;

  box-sizing: border-box;

  width: ${({ size }) => BUTTON_SIZES[size as keyof typeof BUTTON_SIZES]}px;
  height: ${({ size }) => BUTTON_SIZES[size as keyof typeof BUTTON_SIZES]}px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.primary};
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : theme.colors.primary};
  border-radius: ${({ size }) =>
    BUTTON_SIZES[size as keyof typeof BUTTON_SIZES] / 2}px;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  user-select: none;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : theme.colors.helperBlue4};
    border: 1px solid
      ${({ theme, disabled }) =>
        disabled ? theme.colors.gray : theme.colors.helperBlue4};
  }

  &:active {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : theme.colors.primary};
  }

  &::after {
    content: " ";

    position: absolute;
    top: ${({ size }) =>
      BORDER_POSITIONS[size as keyof typeof BORDER_POSITIONS].top}px;
    left: ${({ size }) =>
      BORDER_POSITIONS[size as keyof typeof BORDER_POSITIONS].left}px;

    width: ${({ size }) => BORDER_SIZES[size as keyof typeof BUTTON_SIZES]}px;
    height: ${({ size }) => BORDER_SIZES[size as keyof typeof BUTTON_SIZES]}px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: ${({ size }) =>
      BORDER_SIZES[size as keyof typeof BUTTON_SIZES] / 2}px;
  }
`;
