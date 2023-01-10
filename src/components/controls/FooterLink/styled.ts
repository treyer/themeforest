import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.li`
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active .link-text {
    font-weight: 600;

    color: ${({ theme }) => theme.footerAdditionalColor};
  }
`;

export const SecondaryText = styled.span`
  color: ${({ theme }) => theme.footerSecondaryColor};

  user-select: none;

  &:hover,
  &:active {
    font-weight: 600;
  }
`;
