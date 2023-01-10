import { MouseEventHandler } from "react";
import { ButtonSimpleMode, ButtonSimpleSize } from "types/index";

export type ButtonSimpleProps = {
  size?: ButtonSimpleSize;
  disabled?: boolean | undefined;
  outlined?: boolean | undefined;
  mode?: ButtonSimpleMode | undefined;
  width?: number | undefined;
  height?: number | undefined;
  onClickCallback?:
    | (() => void)
    | (() => MouseEventHandler<HTMLDivElement>)
    | undefined;
  children: string;
};

export type ButtonOutlinedProps = {
  width: number;
  height: number;
  mode: ButtonSimpleMode | undefined;
};
