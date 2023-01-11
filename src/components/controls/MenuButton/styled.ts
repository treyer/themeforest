import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "types/index";

export const Wrapper = styled(NavLink)`
  text-decoration: none;

  &.active span:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &.active span {
    font-weight: 600;
    color: ${({ theme }) =>
      (theme.currentTheme as Theme) === Theme.Light
        ? theme.colors.black
        : theme.colors.white};
  }

  &:not(.active):hover span {
    opacity: 0.8;
  }
`;

export const StyledText = styled.span`
  display: block;
  position: relative;
  font-family: "Manrope";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) =>
    (theme.currentTheme as Theme) === Theme.Dark
      ? theme.colors.white
      : theme.colors.gray};
`;
