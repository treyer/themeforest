import styled from "styled-components";

import { IconProps } from "./types";

const IconImage = styled.div<IconProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ color, theme }) =>
    color ? `background-color: ${theme.colors[color]};` : ""}
  -webkit-mask-image: url(${({ url }) => url});
  mask-image: url(${({ url }) => url});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center center;
`;

export default IconImage;
