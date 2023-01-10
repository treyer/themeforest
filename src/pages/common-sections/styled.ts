import styled from "styled-components";

import { Theme } from "types/index";

export const Wrapper = styled.div`
  padding-top: 80px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.helperBlue2};
  background-color: ${({ theme }) =>
    theme.currentTheme === Theme.Dark
      ? theme.colors.secondary
      : theme.colors.primary};
`;

export const ControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  column-gap: 15px;
  align-items: center;
  justify-content: center;

  width: 235px;
  height: 60px;
`;
