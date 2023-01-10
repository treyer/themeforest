import { DirectionControlType, Direction } from "types/index";

export type DirectionControlProps = {
  direction: Direction;
  type?: DirectionControlType;
  disabled?: boolean;
};
