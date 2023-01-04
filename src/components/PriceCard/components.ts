import styled from "styled-components";

type WrapperProps = {
  isActive: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;

  width: 255px;
  height: 525px;
  padding: 35px 20px;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.white};
  border-radius: ${({ theme }) => theme.radiuses[0]};

  box-shadow: ${({ theme }) => theme.shadows[2]};
`;
