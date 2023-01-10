import styled from "styled-components";

import { ImageProps } from "./types";

export const StyledImage = styled.img<ImageProps>`
  display: block;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : "")}
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom}px;` : ""}
  ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight}px;` : "")}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px;` : "")}
`;
