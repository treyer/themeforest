import styled from "styled-components";
import { ModalProps } from "./types";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const UnderLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.2;
`;

export const ModalWrapper = styled.div<ModalProps>`
  ${({ width }) => (width ? `width: ${width}px;` : "width: 100%;")};
  ${({ height }) => (height ? `height: ${height}px;` : "height: 100%;")};
  padding: 35px;
  border-radius: ${({ theme }) => theme.radiuses[0]}px;
  background-color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px 2px 6px rgba(0, 43, 78, 0.15))
    drop-shadow(0px 1px 2px rgba(0, 43, 78, 0.3));
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
