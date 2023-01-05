import styled from "styled-components";

export const FlexClickable = styled.div`
  display: flex;

  width: 94px;

  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;
