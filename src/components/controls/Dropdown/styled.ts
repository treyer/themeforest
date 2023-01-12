import styled from "styled-components";
import { HeaderWrapperProps } from "./types";

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 73px;
  width: 100%;
  border-bottom: ${({ opened, theme }) =>
    opened ? "none;" : `1px solid ${theme.colors.gray};`};
`;

export const ContentWrapper = styled.div`
  padding: 25px 0;
`;
