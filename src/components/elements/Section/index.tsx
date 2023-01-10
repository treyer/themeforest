import { SectionDirection } from "types/index";
import { StyledDiv } from "./styled";
import { SectionProps } from "./types";

const Section = ({
  type,
  direction = SectionDirection.Raw,
  marginTop = 0,
  marginBottom = 0,
  rowGap = "unset",
  columnGap = "unset",
  children,
}: SectionProps) => {
  return (
    <StyledDiv
      type={type}
      direction={direction}
      marginTop={marginTop}
      marginBottom={marginBottom}
      rowGap={rowGap}
      columnGap={columnGap}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
