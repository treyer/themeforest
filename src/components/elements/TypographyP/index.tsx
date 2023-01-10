import { StyledP } from "./styled";
import { StyledPProps } from "./types";

const TypographyP = ({ children }: StyledPProps) => {
  return <StyledP>{children}</StyledP>;
};

export default TypographyP;
