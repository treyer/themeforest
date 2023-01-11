import { ReactNode } from "react";

type FlexDirection = "row" | "column";

type FlexJustify = "start" | "center" | "end" | "space-between";

type FlexAlign = "start" | "center" | "end";

export type FlexProps = {
  direction?: FlexDirection | undefined;
  justify?: FlexJustify | undefined;
  align?: FlexAlign | undefined;
  width?: number | "100%" | undefined;
  height?: number | undefined;
  marginTop?: number | undefined;
  marginBottom?: number | undefined;
  marginRight?: number | undefined;
  marginLeft?: number | undefined;
  padding?: number | undefined;
  paddingTop?: number | undefined;
  paddingBottom?: number | undefined;
  paddingRight?: number | undefined;
  paddingLeft?: number | undefined;
  rowGap?: number | undefined;
  columnGap?: number | undefined;
  flexWrap?: boolean | undefined;
  onClickCallback?: () => void;
  children: ReactNode;
};
