import { ReactNode } from "react";

export type TypographyVariant =
  | "headline0_extrabold"
  | "headline1_extrabold"
  | "headline2_extrabold"
  | "headline3_extrabold"
  | "headline3_1_extrabold"
  | "headline4_bold"
  | "headline5_bold"
  | "headline6_bold"
  | "headline7_bold"
  | "headline7_semibold"
  | "headline7_medium"
  | "headline8_semibold"
  | "paragraph0_bold"
  | "paragraph1_regular"
  | "paragraph2_regular"
  | "paragraph2_bold"
  | "paragraph3_regular"
  | "paragraph3_semibold";

export type TextColor = "black" | "gray" | "primary" | "white";

export type TextElement = "span" | "div";

export type TextAlign = "start" | "end" | "center" | "justify";

export type TypographyProps = {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string | undefined;
  textAlign?: TextAlign | undefined;
  color?: TextColor | undefined;
  element?: TextElement | undefined;
  width?: number | undefined;
  height?: number | undefined;
  marginTop?: number | undefined;
  marginBottom?: number | undefined;
  unselected?: boolean | undefined;
  isQuote?: boolean | undefined;
};
