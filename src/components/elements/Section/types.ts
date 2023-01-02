import { SectionDirection, SectionType } from "types/types";

export type SectionProps = {
  type: SectionType;
  direction?: SectionDirection;
  marginTop?: number;
  marginBottom?: number;
  children?: JSX.Element | JSX.Element[];
};
