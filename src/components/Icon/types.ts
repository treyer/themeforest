type IconColor = "secondary" | "primary" | "white" | "gray" | "helperBlue3";

export type IconProps = {
  url: string;
  width: number;
  height: number;
  color?: IconColor | undefined;
  className?: string;
};
