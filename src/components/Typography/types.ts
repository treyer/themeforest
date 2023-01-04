import { TextColor, TextElement, TextStyle } from "types/types";

export type TypographyProps = {
  textStyle: TextStyle;
  color?: string | TextColor;
  textElement?: TextElement;
  width?: number | null;
  marginTop?: number | null;
  marginBottom?: number | null;
  children: string | JSX.Element;
};
