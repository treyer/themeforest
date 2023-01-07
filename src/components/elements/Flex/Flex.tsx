import { FlexAlign, FlexDirection, FlexJustify } from "types/types";
import { FlexElement } from "./components";
import { FlexProps } from "./types";

const Flex = ({
  direction = FlexDirection.Raw,
  justify = FlexJustify.SpaceBetween,
  align = FlexAlign.Center,
  width = "100%",
  height = null,
  marginTop = null,
  marginLeft = null,
  marginBottom = null,
  marginRight = null,
  paddingTop = null,
  paddingBottom = null,
  paddingRight = null,
  paddingLeft = null,
  rowGap = "unset",
  columnGap = "unset",
  flexWrap = false,
  children,
}: FlexProps) => {
  return (
    <FlexElement
      direction={direction}
      justify={justify}
      align={align}
      width={width}
      height={height}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      marginRight={marginRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      rowGap={rowGap}
      columnGap={columnGap}
      flexWrap={flexWrap}
    >
      {children}
    </FlexElement>
  );
};

export default Flex;
