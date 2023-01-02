import styled from "styled-components";
import { SectionDirection, SectionType } from "types/types";
import { SectionProps } from "./types";

export const StyledDiv = styled.div<Omit<SectionProps, "children">>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ direction }) =>
    direction === SectionDirection.Raw ? "space-between" : "start"};

  width: 100%;
  height: auto;
  max-width: ${({ type, theme }) =>
    type === SectionType.Narrow ? theme.size.laptop : theme.size.desktop};
  margin: ${({ marginTop, marginBottom }) =>
    `${marginTop}px auto ${marginBottom}px`};
`;
