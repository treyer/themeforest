import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 10px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 530px;
  max-width: 1110px;
  min-width: ${({ theme }) => theme.size.mobileM};
  margin: 0 auto;
`;

export const MainData = styled.div`
  display: flex;
  justify-content: space-between;

  height: 442px;
  padding: 50px;
`;

export const AdditionalData = styled.div`
  height: 88px;
`;

export const LeftBlock = styled.div`
  width: 100%;
  height: 100%;
  max-width: 285px;
`;

export const RightBlock = styled.div`
  width: 100%;
  height: 100%;
  max-width: 635px;
`;
