import styled from "styled-components";

import { WrapperProps } from "./types";

export const Wrapper = styled.article<WrapperProps>`
  display: flex;
  column-gap: 20px;
  align-items: center;
  height: ${({ height }) => height}px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}px;
`;
