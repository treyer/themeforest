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

  width: ${({ width }) => (width === "100%" ? "100%" : `${width}px`)};
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : "")}
  ${({ marginRight }) => (marginRight ? `margin-top: ${marginRight}px;` : "")}
  ${({ marginLeft }) => (marginLeft ? `margin-top: ${marginLeft}px;` : "")}
  ${({ marginBottom }) =>
    marginBottom ? `margin-top: ${marginBottom}px;` : ""}
`;
