import styled from "styled-components";
import { FlexProps } from "./types";

export const FlexElement = styled.div<Omit<FlexProps, "children">>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};

  width: ${({ width }) => (width === "auto" ? "auto" : `${width}px`)};
  margin: ${({ marginTop, marginRight, marginLeft, marginBottom }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
`;
