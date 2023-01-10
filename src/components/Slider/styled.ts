import styled from "styled-components";

type WrapperProps = {
  height: number;
};

type InnerProps = {
  width: number;
  widthAddition: number;
  height: number;
  columnGap: number;
  offset: number;
};

export const Wrapper = styled.div<WrapperProps>`
  position: relative;

  width: 100%;
  height: ${({ height }) => height}px;

  overflow: hidden;
`;

export const Inner = styled.div<InnerProps>`
  position: absolute;
  top: 0;
  left: ${({ offset }) => offset}%;
  column-gap: ${({ columnGap }) => columnGap}px;

  display: flex;

  width: ${({ width, widthAddition }) =>
    `calc(${width}% + ${widthAddition}px)`};
  height: ${({ height }) => height}px;

  transition: left 0.5s ease-in-out;
`;
