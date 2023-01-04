import styled from "styled-components";
import { IconColor } from "types/types";

import { IconProps } from "./types";

const IconImage = styled.div<IconProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ color, theme }) => {
    if (!color) return "";
    if (color === IconColor.Primary) {
      return `background-color: ${theme.colors.primary};`;
    }
    if (color === IconColor.Secondary) {
      return `background-color: ${theme.colors.secondary};`;
    }
    if (color === IconColor.White) {
      return `background-color: ${theme.colors.white};`;
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
