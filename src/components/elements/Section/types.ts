import { SectionDirection, SectionType } from "types/types";

export type SectionProps = {
  type: SectionType;
  direction?: SectionDirection;
  marginTop?: number;
  marginBottom?: number;
  rowGap?: "unset" | number;
  columnGap?: "unset" | number;
  children?: JSX.Element | JSX.Element[];
};
