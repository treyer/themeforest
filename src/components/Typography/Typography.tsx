import { TextColor, TextElement } from "types/types";
import { StyledTextDiv, StyledTextSpan } from "./components";
import { TypographyProps } from "./types";

const Typography = ({
  textStyle,
  textAlign = null,
  color = TextColor.Default,
  textElement = TextElement.Span,
  width = null,
  height = null,
  marginTop = null,
  marginBottom = null,
  unselected = false,
  className = "",
  isQuote = false,
  children,
}: TypographyProps) => {
  if (textElement === TextElement.Span) {
    return (
      <StyledTextSpan
        className={className}
        textStyle={textStyle}
        color={color}
        marginTop={marginTop}
        marginBottom={marginBottom}
        unselected={unselected}
      >
        {children}
      </StyledTextSpan>
    );
  }
  if (textElement === TextElement.Div) {
    return (
      <StyledTextDiv
        className={className}
        textStyle={textStyle}
        textAlign={textAlign}
        color={color}
        width={width}
        height={height}
        marginTop={marginTop}
        marginBottom={marginBottom}
        unselected={unselected}
        isQuote={isQuote}
      >
        {children}
      </StyledTextDiv>
    );
  }
  return null;
};

export default Typography;
