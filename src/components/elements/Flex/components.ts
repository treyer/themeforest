import styled from "styled-components";
import { FlexProps } from "./types";

export const FlexElement = styled.div<Omit<FlexProps, "children">>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  ${({ rowGap }) => (rowGap === "unset" ? "" : `row-gap: ${rowGap}px;`)}
  ${({ columnGap }) =>
    columnGap === "unset" ? "" : `column-gap: ${columnGap}px;`}
  ${({ flexWrap }) => (flexWrap ? "flex-wrap: wrap;" : "")}

  width: ${({ width }) => (width === "100%" ? "100%" : `${width}px`)};
  ${({ height }) => (height ? `height: ${height}px;` : "")};
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : "")}
  ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight}px;` : "")}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px;` : "")}
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom}px;` : ""}
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop}px;` : "")}
  ${({ paddingBottom }) =>
    paddingBottom ? `padding-bottom: ${paddingBottom}px;` : ""}
  ${({ paddingRight }) =>
    paddingRight ? `padding-right: ${paddingRight}px;` : ""}
  ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${paddingLeft}px;` : "")}
`;
