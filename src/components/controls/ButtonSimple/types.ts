import { ButtonSimpleMode, ButtonSimpleSize } from "types/types";

export type ButtonSimpleProps = {
  size?: ButtonSimpleSize;
  disabled?: boolean;
  outlined?: boolean;
  mode?: ButtonSimpleMode;
  width?: number | null;
  height?: number | null;
  children: string;
};
