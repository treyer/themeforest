import styled from "styled-components";

import { TypographyProps } from "./types";

export const StyledTextSpan = styled.span<Omit<TypographyProps, "children">>`
  ${({ theme, variant }) =>
    Object.entries(theme.typographyStyles[variant]).map(
      (el) => `${el[0]}: ${el[1]};`,
    )}
  ${({ color, theme }) => (color ? `color: ${theme.colors[color]};` : "")}
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : "")}
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom}px;` : ""}
  ${({ unselected }) => (unselected ? "user-select: none;" : "")}
`;

export const StyledTextDiv = styled(StyledTextSpan).attrs({
  as: "div",
})`
  position: relative;
  ${({ width }) => (width ? `width: ${width}px;` : "")}
  ${({ height }) => (height ? `height: ${height}px;` : "")}
  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : "")}
  ${({ isQuote, theme }) =>
    isQuote
      ? `&::before {
        content: "";
        position: absolute;
        left: -34px;
        top: 10%;
        width: 4px;
        height: 80%;
        background-color: ${theme.colors.primary};
      }`
      : ""}
`;
