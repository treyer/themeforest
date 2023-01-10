import styled from "styled-components";

import { typographyStyles } from "styles/typography";
import { TextColor } from "types/index";
import { TypographyProps } from "./types";

export const StyledTextSpan = styled.span<Omit<TypographyProps, "children">>`
  ${({ textStyle }) =>
    Object.entries(typographyStyles[textStyle]).map(
      (el) => `${el[0]}: ${el[1]};`,
    )}

  ${({ color, theme }) => {
    if (!color) return "";
    if (Object.values(TextColor).includes(color as TextColor)) {
      return `color: ${theme.colors[color]};`;
    }
    return `color: ${color};`;
  }}

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

  ${({ isQuote, theme }) => {
    if (isQuote) {
      return `&::before {
        content: "";

        position: absolute;
        left: -34px;
        top: 10%;

        width: 4px;
        height: 80%;

        background-color: ${theme.colors.primary};
      }`;
    }
    return "";
  }}
`;