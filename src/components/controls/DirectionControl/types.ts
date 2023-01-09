import { DirectionControlType, Direction } from "types/types";

export type DirectionControlProps = {
  direction: Direction;
  type?: DirectionControlType;
  disabled?: boolean;
};
