import styled from "styled-components";
import { Theme } from "types/index";

export const ButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  width: 168px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radiuses[0]}px;
  background-color: ${({ theme }) =>
    theme.currentTheme == Theme.Light
      ? theme.colors.primary
      : theme.colors.white};
  cursor: pointer;
  user-select: none;
  box-shadow: ${({ theme }) => theme.shadows[0]};

  &:hover {
    background-color: ${({ theme }) =>
      theme.currentTheme == Theme.Light
        ? theme.colors.helperBlue4
        : theme.colors.white};
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.currentTheme == Theme.Light
        ? theme.colors.primary
        : theme.colors.white};
  }

  &:hover .button-icon {
    background-color: ${({ theme }) =>
      theme.currentTheme == Theme.Light
        ? theme.colors.white
        : theme.colors.primary};
  }

  &:hover .button-text {
    color: ${({ theme }) =>
      theme.currentTheme == Theme.Light
        ? theme.colors.white
        : theme.colors.primary};
  }
`;
