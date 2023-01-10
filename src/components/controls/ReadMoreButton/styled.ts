import styled from "styled-components";

export const FlexClickable = styled.div`
  display: flex;

  width: 94px;

  cursor: pointer;
  user-select: none;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & .text-read-more {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover .icon-read-more {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover .text-read-more {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
