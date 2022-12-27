import styled from "styled-components";

type Props = {
  color: string;
  width: number;
  height: number;
};

const Wrapper = styled.svg<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  fill: ${({ color }) => color};
`;

export default Wrapper;
