import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Theme } from "types/types";

type Props = {
  isSubmenuOpened: boolean;
  currentTheme: Theme;
};

export const Button = styled(NavLink)`
  position: relative;

  text-decoration: none;

  color: ${({ theme }) => theme.fontColorMain};

  &.active span {
    font-weight: 600;
  }

  &.active:after {
    content: "";

    position: absolute;
    bottom: 0px;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.fontColorMain};
  }

  &:hover {
    opacity: 0.7;
  }

  &.active:hover {
    opacity: 1;
  }
`;

export const ButtonSubmenu = styled.div<Props>`
  position: relative;

  color: ${({ theme }) => theme.fontColorMain};

  cursor: pointer;

  &::after {
    content: ${({ isSubmenuOpened, currentTheme }) => {
      if (isSubmenuOpened) {
        if (currentTheme === Theme.Light) {
          return "url('assets/svg/icon_chevron_up_20_light.svg')";
        }
        return "url('assets/svg/icon_chevron_up_20.svg')";
      } else {
        if (currentTheme === Theme.Light) {
          return "url('assets/svg/icon_chevron_down_20_light.svg')";
        }
        return "url('assets/svg/icon_chevron_down_20.svg')";
      }
    }};

    position: absolute;
    top: 2px;
    right: -25px;

    width: 20px;
    height: 20px;

    color: ${({ theme }) => theme.fontColorMain};
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonSimple = styled.div`
  color: ${({ theme }) => theme.fontColorMain};

  &:hover {
    opacity: 0.7;
  }
`;
