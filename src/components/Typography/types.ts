import { TextAlign, TextColor, TextElement, TextStyle } from "types/types";

export type TypographyProps = {
  textStyle: TextStyle;
  textAlign?: TextAlign | null;
  color?: string | TextColor;
  textElement?: TextElement;
  width?: number | null;
  height?: number | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  children: string | JSX.Element;
};
