import styled from "styled-components";

import { WrapperProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: calc(50% - ${({ loaderWidth }) => loaderWidth / 2}px);
  left: calc(50% - ${({ loaderHeight }) => loaderHeight / 2}px);
`;
