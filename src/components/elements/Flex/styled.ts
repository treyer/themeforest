import styled from "styled-components";

import { FlexProps } from "./types";

export const FlexElement = styled.div<FlexProps>`
  display: flex;
  position: relative;
  ${({ direction }) => (direction ? `flex-direction: ${direction};` : "")};
  ${({ justify }) => (justify ? `justify-content: ${justify};` : "")};
  ${({ align }) => (align ? `align-items: ${align};` : "")}
  ${({ rowGap }) => (rowGap ? `row-gap: ${rowGap}px;` : "")}
  ${({ columnGap }) => (columnGap ? `column-gap: ${columnGap}px;` : "")}
  ${({ flexWrap }) => (flexWrap ? "flex-wrap: wrap;" : "")}
  ${({ width }) =>
    !width ? "" : width === "100%" ? "width: 100%;" : `width: ${width}px;`}
  ${({ height }) => (height ? `height: ${height}px;` : "")};
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : "")}
  ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight}px;` : "")}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px;` : "")}
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom}px;` : ""}
  ${({ padding }) => (padding ? `padding: ${padding}px;` : "")}
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop}px;` : "")}
  ${({ paddingBottom }) =>
    paddingBottom ? `padding-bottom: ${paddingBottom}px;` : ""}
  ${({ paddingRight }) =>
    paddingRight ? `padding-right: ${paddingRight}px;` : ""}
  ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${paddingLeft}px;` : "")}
`;
