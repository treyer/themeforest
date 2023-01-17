type IconColor =
  | "secondary"
  | "primary"
  | "white"
  | "gray"
  | "helperBlue3"
  | "black"
  | "inherit";

export type IconProps = {
  url: string;
  width: number;
  height: number;
  color?: IconColor | undefined;
  className?: string;
};
