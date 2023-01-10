import styled from "styled-components";

import Icon from "components/Icon";
import { IconProps } from "components/Icon/types";

export const StyledIcon = styled(Icon)<IconProps & { disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover.icon-control {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.helperBlue3 : theme.colors.primary};
  }

  &:active.icon-control {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.helperBlue3 : theme.colors.secondary};
  }
`;
