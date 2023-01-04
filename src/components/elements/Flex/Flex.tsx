import { FlexAlign, FlexDirection, FlexJustify } from "types/types";
import { FlexElement } from "./components";
import { FlexProps } from "./types";

const Flex = ({
  direction = FlexDirection.Raw,
  justify = FlexJustify.SpaceBetween,
  align = FlexAlign.Center,
  width = "100%",
  marginTop = null,
  marginLeft = null,
  marginBottom = null,
  marginRight = null,
  rowGap = "unset",
  columnGap = "unset",
  children,
}: FlexProps) => {
  return (
    <FlexElement
      direction={direction}
      justify={justify}
      align={align}
      width={width}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      marginRight={marginRight}
      rowGap={rowGap}
      columnGap={columnGap}
    >
      {children}
    </FlexElement>
  );
};

export default Flex;
