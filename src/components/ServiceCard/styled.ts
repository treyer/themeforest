import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;

  width: 540px;
  height: 317px;
  padding: 20px 35px;

  border-radius: ${({ theme }) => theme.radiuses[0]};
`;
