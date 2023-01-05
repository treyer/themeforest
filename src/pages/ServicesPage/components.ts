import styled from "styled-components";
import { Theme } from "types/types";

export const Wrapper = styled.div`
  padding-top: 80px;

  border-bottom: 1px solid #607d94;
  background-color: ${({ theme }) =>
    theme.currentTheme === Theme.Dark
      ? theme.colors.secondary
      : theme.colors.white};
`;
