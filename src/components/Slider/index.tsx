import {
  Children,
  forwardRef,
  Ref,
  useImperativeHandle,
  useState,
} from "react";

import { Inner, Wrapper } from "./styled";

import { SliderHandle } from "types/index";
import { SliderProps } from "./types";

const Slider = (
  { height, itemsToShow, columnGap, children }: SliderProps,
  ref: Ref<SliderHandle>,
) => {
  const totalSlides = Children.count(children);
  const innerWidthInPercent =
    totalSlides <= itemsToShow
      ? 100
      : 100 + (100 / itemsToShow) * (totalSlides - itemsToShow);
  const widthGapAddition =
    itemsToShow > totalSlides ? columnGap * (totalSlides - 1) : 0;

  useImperativeHandle(ref, () => ({
    forward: moveForward,
    backward: moveBackward,
  }));

  const [currentPosition, setCurrentPosition] = useState(0);

  const moveForward = () => {
    if (totalSlides > itemsToShow) {
      let position = currentPosition + 1;
      if (position > totalSlides - itemsToShow) {
        position = 0;
      }
      setCurrentPosition(position);
    }
  };

  const moveBackward = () => {
    if (totalSlides > itemsToShow) {
      let position = currentPosition - 1;
      if (position < 0) {
        position = totalSlides - itemsToShow;
      }
      setCurrentPosition(position);
    }
  };

  return (
    <Wrapper height={height}>
      <Inner
        width={innerWidthInPercent}
        widthAddition={widthGapAddition}
        height={height}
        columnGap={columnGap}
        offset={-(currentPosition * (100 / itemsToShow))}
      >
        {children}
      </Inner>
    </Wrapper>
  );
};

export default forwardRef(Slider);
