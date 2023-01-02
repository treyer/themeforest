import { SectionDirection } from "types/types";
import { StyledDiv } from "./components";
import { SectionProps } from "./types";

const Section = ({
  type,
  direction = SectionDirection.Raw,
  marginTop = 0,
  marginBottom = 0,
  children,
}: SectionProps) => {
  return (
    <StyledDiv
      type={type}
      direction={direction}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
