import { FlexElement } from "./styled";
import { FlexProps } from "./types";

const Flex = ({ children, onClickCallback, ...rest }: FlexProps) => {
  return (
    <FlexElement {...rest} onClick={onClickCallback}>
      {children}
    </FlexElement>
  );
};

Flex.defaultProps = {
  direction: "row",
  justify: "space-between",
  align: "center",
  width: "100%",
  flexWrap: false,
};

export default Flex;
