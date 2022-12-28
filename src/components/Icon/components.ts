import styled from "styled-components";

type Props = {
  width: number;
  height: number;
  url: string;
  color?: string;
};

const IconImage = styled.div<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ color }) => (color ? ` background-color: ${color};` : "")}
  -webkit-mask-image: url(/assets/svg/${({ url }) => url});
  mask-image: url(/assets/svg/${({ url }) => url});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center center;
`;

export default IconImage;
