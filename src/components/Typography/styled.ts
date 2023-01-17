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

  & p {
    position: relative;
    margin-top: 0;
  }

  & p:last-child {
    position: relative;
    margin-bottom: 0;
  }

  & a {
    color: ${({ theme }) => theme.colors.primary};
  }

  & b {
    ${({ theme }) =>
      Object.entries(theme.typographyStyles.paragraph2_bold).map(
        (el) => `${el[0]}: ${el[1]};`,
      )}
    color: ${({ theme }) => theme.colors.black};
  }

  & q {
    margin-left: 125px;
    display: block;
    ${({ theme }) =>
      Object.entries(theme.typographyStyles.paragraph1_regular).map(
        (el) => `${el[0]}: ${el[1]};`,
      )}
    color: ${({ theme }) => theme.colors.black};
  }

  & q::before {
    content: "";
    position: absolute;
    left: 90px;
    top: 10%;
    width: 4px;
    height: 80%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
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
