import { FlexAlign, FlexDirection, FlexJustify } from "types/types";

export type FlexProps = {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  width?: number | "auto";
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
  children: JSX.Element | JSX.Element[];
};
