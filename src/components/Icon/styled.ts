import styled from "styled-components";
import { IconColor } from "types/index";

import { IconProps } from "./types";

const IconImage = styled.div<IconProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ color, theme }) => {
    if (!color) return "";
    if (Object.values(IconColor).includes(color as IconColor)) {
      return `background-color: ${theme.colors[color]};`;
    }
    return `background-color: ${color};`;
  }}
  -webkit-mask-image: url(${({ url }) => url});
  mask-image: url(${({ url }) => url});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center center;
`;

export default IconImage;
