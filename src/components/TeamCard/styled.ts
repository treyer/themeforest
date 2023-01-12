import styled from "styled-components";
import { ImageWrapperProps } from "./types";

export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: ${({ width }) => width}px;
  ${({ verticalOffset }) =>
    verticalOffset ? `bottom: ${verticalOffset}px` : ""};
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: 25px;
  display: flex;
  flex-direction: column;
`;
