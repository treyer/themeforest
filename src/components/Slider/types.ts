import { Ref } from "react";
import { SliderHandle } from "types/types";

export type SliderProps = {
  height: number;
  itemsToShow: number;
  columnGap: number;
  ref: Ref<SliderHandle>;
  children: JSX.Element | JSX.Element[];
};
