import styled from "styled-components";

import { typographyStyles } from "styles/typography";
import { TextColor } from "types/types";
import { TypographyProps } from "./types";

export const StyledTextSpan = styled.span<TypographyProps>`
  ${({ textStyle }) =>
    Object.entries(typographyStyles[textStyle]).map(
      (el) => `${el[0]}: ${el[1]};`,
    )}

  ${({ color, theme }) => {
    if (!color) return "";
    if (color === TextColor.Black) return `color: ${theme.colors.black};`;
    if (color === TextColor.Grey) return `color: ${theme.colors.grey};`;
    if (color === TextColor.White) return `color: ${theme.colors.white};`;
    if (color === TextColor.Primary) return `color: ${theme.colors.primary};`;
    return `color: ${color};`;
  }}

  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : "")}
  ${({ marginBottom }) =>
    marginBottom ? `margin-top: ${marginBottom}px;` : ""}
`;

export const StyledTextDiv = styled(StyledTextSpan).attrs({
  as: "div",
})`
  ${({ width }) => (width ? `width: ${width}px;` : "")}
`;
