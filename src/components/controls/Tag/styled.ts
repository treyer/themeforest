import styled from "styled-components";

import Flex from "components/elements/Flex";
import { StyledTextProps, WrapperProps } from "./types";
import Typography from "components/Typography";

export const Wrapper = styled(Flex)<WrapperProps>`
  display: inline;
  width: auto;
  border-radius: ${({ theme }) => theme.radiuses[0]}px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  user-select: none;

  &:hover,
  &:active {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.white : theme.colors.primary};
  }

  &:hover span {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : theme.colors.white};
  }
`;

export const StyledText = styled(Typography)<StyledTextProps>`
  color: ${({ theme, active, disabled }) =>
    disabled
      ? theme.colors.gray
      : active
      ? theme.colors.white
      : theme.colors.primary};
`;
