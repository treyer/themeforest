import { StyledDiv } from "./styled";
import { SectionProps } from "./types";

const Section = ({ children, ...rest }: SectionProps) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

Section.defaultProps = {
  direction: "row",
  marginTop: 0,
  marginBottom: 0,
};

export default Section;
