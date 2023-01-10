import { ButtonSimpleMode, ButtonSimpleSize } from "types/index";

export type ButtonSimpleProps = {
  size?: ButtonSimpleSize;
  disabled?: boolean;
  outlined?: boolean;
  mode?: ButtonSimpleMode;
  width?: number | null;
  height?: number | null;
  children: string;
};

export type ButtonOutlinedProps = {
  width: number;
  height: number;
  mode: ButtonSimpleMode;
};
