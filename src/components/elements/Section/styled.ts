import styled from "styled-components";

import { SectionType } from "types/index";
import { SectionProps } from "./types";

export const StyledDiv = styled.section<Omit<SectionProps, "children">>`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ direction }) =>
    direction === "raw" ? "space-between" : "start"};
  ${({ rowGap }) => (rowGap ? `row-gap: ${rowGap}px;` : "")}
  ${({ columnGap }) => (columnGap ? `column-gap: ${columnGap}px;` : "")}
  width: 100%;
  height: auto;
  max-width: ${({ type, theme }) =>
    type === SectionType.Narrow ? theme.size.laptop : theme.size.desktop};
  min-width: ${({ theme }) => theme.size.mobileM};
  margin: ${({ marginTop, marginBottom }) =>
    `${marginTop}px auto ${marginBottom}px`};
  ${({ backgroundColor, theme }) =>
    backgroundColor
      ? `background-color: ${theme.colors[backgroundColor]};`
      : ""}
`;
