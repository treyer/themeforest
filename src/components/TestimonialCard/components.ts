import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;

  width: 350px;
  height: 371px;
  padding: 35px;

  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows[2]}; ;
`;

export const PersonImg = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 50%;
`;
