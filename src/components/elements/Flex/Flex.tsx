import { FlexAlign, FlexDirection, FlexJustify } from "types/types";
import { FlexElement } from "./components";
import { FlexProps } from "./types";

const Flex = ({
  direction = FlexDirection.Raw,
  justify = FlexJustify.SpaceBetween,
  align = FlexAlign.Center,
  width = "auto",
  marginTop = 0,
  marginLeft = 0,
  marginBottom = 0,
  marginRight = 0,
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
    >
      {children}
    </FlexElement>
  );
};

export default Flex;
