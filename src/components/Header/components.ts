import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Inner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 126px;
  padding: 0 10px;
  max-width: ${({ theme }) => theme.size.desktop};
  min-width: ${({ theme }) => theme.size.mobileM};
`;

export const ButtonsBlock = styled.div`
  display: flex;
`;
