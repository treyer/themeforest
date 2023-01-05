import { FlexAlign, FlexDirection, FlexJustify } from "types/types";

export type FlexProps = {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  width?: number | "100%";
  marginTop?: number | null;
  marginLeft?: number | null;
  marginBottom?: number | null;
  marginRight?: number | null;
  rowGap?: "unset" | number;
  columnGap?: "unset" | number;
  flexWrap?: boolean;
  children: JSX.Element | JSX.Element[] | string;
};
