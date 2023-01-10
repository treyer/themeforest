import styled from "styled-components";
import { SectionDirection, SectionType } from "types/index";
import { SectionProps } from "./types";

export const StyledDiv = styled.section<Omit<SectionProps, "children">>`
  position: relative;

  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ direction }) =>
    direction === SectionDirection.Raw ? "space-between" : "start"};
  ${({ rowGap }) => (rowGap === "unset" ? "" : `row-gap: ${rowGap}px;`)}
  ${({ columnGap }) =>
    columnGap === "unset" ? "" : `column-gap: ${columnGap}px;`}

  width: 100%;
  height: auto;
  max-width: ${({ type, theme }) =>
    type === SectionType.Narrow ? theme.size.laptop : theme.size.desktop};
  min-width: ${({ theme }) => theme.size.mobileM};
  margin: ${({ marginTop, marginBottom }) =>
    `${marginTop}px auto ${marginBottom}px`};
`;
