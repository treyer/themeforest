import { StyledTextDiv, StyledTextSpan } from "./styled";
import { TypographyProps } from "./types";

const Typography = ({ element, children, ...rest }: TypographyProps) => {
  return (
    <>
      {element === "div" ? (
        <StyledTextDiv {...rest}>{children}</StyledTextDiv>
      ) : (
        <StyledTextSpan {...rest}>{children}</StyledTextSpan>
      )}
    </>
  );
};

Typography.defaultProps = {
  color: "black",
  element: "span",
  unselected: false,
  className: "",
  isQuote: false,
};

export default Typography;
