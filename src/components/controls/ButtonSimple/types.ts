import { ButtonSimpleSize } from "types/types";

export type ButtonSimpleProps = {
  size?: ButtonSimpleSize;
  disabled?: boolean;
  outlined?: boolean;
  width?: number | null;
  height?: number | null;
  children: string;
};
