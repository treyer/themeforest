import { ReactNode } from "react";

import { SectionType } from "types/index";

type SectionDirection = "raw" | "column";

export type SectionProps = {
  type: SectionType;
  direction?: SectionDirection | undefined;
  marginTop?: number | undefined;
  marginBottom?: number | undefined;
  rowGap?: number | undefined;
  columnGap?: number | undefined;
  children?: ReactNode;
};
