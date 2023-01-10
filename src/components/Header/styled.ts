import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 10px;
`;

export const Inner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 126px;
  max-width: 1110px;
  min-width: ${({ theme }) => theme.size.mobileM};
  margin: 0 auto;
`;

export const ButtonsBlock = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 510px;
`;
