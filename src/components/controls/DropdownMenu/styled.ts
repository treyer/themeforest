import Flex from "components/elements/Flex";
import Icon from "components/Icon";
import styled from "styled-components";
import { Theme } from "types/index";
import { MenuButtonWrapperProps } from "./types";

export const IconDropdown = styled(Icon)`
  background-color: ${({ theme }) =>
    (theme.currentTheme as Theme) === Theme.Dark
      ? theme.colors.white
      : theme.colors.gray};
`;

export const DropDownMenuWrapper = styled(Flex)`
  position: relative;

  user-select: none;
`;

export const MenuButtonWrapper = styled.div<MenuButtonWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ gap }) => gap}px;
`;

export const DropdownWrapper = styled(Flex)`
  box-sizing: border-box;
  position: absolute;
  top: 30px;
  left: -20px;
  width: 190px;
  padding: 10px 20px;
  background-color: ${({ theme }) =>
    (theme.currentTheme as Theme) === Theme.Dark
      ? theme.colors.secondary
      : theme.colors.white};
  z-index: 999;
  filter: drop-shadow(0px 2px 6px rgba(0, 43, 78, 0.15))
    drop-shadow(0px 1px 2px rgba(0, 43, 78, 0.3));
`;

export const ButtonWrapper = styled(Flex)`
  box-sizing: border-box;
`;

export const IconArrow = styled(Icon)`
  background-color: ${({ theme }) =>
    (theme.currentTheme as Theme) === Theme.Dark
      ? theme.colors.white
      : theme.colors.gray};
`;

export const SubLayer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.3;
  z-index: 99;
`;
