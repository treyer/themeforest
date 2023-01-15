import styled from "styled-components";
import { ContentWrapperProps, HeaderWrapperProps } from "./types";

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ type }) => (type === "advanced" ? 103 : 73)}px;
  width: 100%;
  ${({ type, theme }) =>
    type === "advanced" ? `padding: ${theme.spaces[4]}px;` : ""}
  border: ${({ type, theme }) =>
    type === "advanced" ? `1px solid ${theme.colors.gray};` : "none"};
  border-bottom: ${({ opened, theme }) =>
    opened ? "none;" : `1px solid ${theme.colors.gray};`};
  border-radius: ${({ theme, type }) =>
    type === "advanced" ? `${theme.radiuses[0]}px` : "unset"};
  ${({ opened }) =>
    opened
      ? `border-bottom-left-radius: unset; border-bottom-right-radius: unset;`
      : ""}
  cursor: pointer;
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${({ type, theme }) =>
    type === "advanced"
      ? `padding: 0 ${theme.spaces[4]}px ${theme.spaces[4]}px;`
      : "padding: 25px 0;"}
  border: ${({ type, theme }) =>
    type === "advanced" ? `1px solid ${theme.colors.gray};` : "none"};
  border-top: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: ${({ theme, type }) =>
    type === "advanced" ? `${theme.radiuses[0]}px` : "unset"};
  border-top-left-radius: unset;
  border-top-right-radius: unset;
`;
