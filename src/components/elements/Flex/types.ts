import { FlexAlign, FlexDirection, FlexJustify } from "types/index";

export type FlexProps = {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  width?: number | "100%";
  height?: number | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  marginRight?: number | null;
  marginLeft?: number | null;
  padding?: number | null;
  paddingTop?: number | null;
  paddingBottom?: number | null;
  paddingRight?: number | null;
  paddingLeft?: number | null;
  rowGap?: "unset" | number;
  columnGap?: "unset" | number;
  flexWrap?: boolean;
  children: JSX.Element | JSX.Element[] | string;
};
