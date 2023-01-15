import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows[1]};

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 540px;
  height: 248px;
  padding: 30px 25px 25px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.radiuses[0]}px;
`;
