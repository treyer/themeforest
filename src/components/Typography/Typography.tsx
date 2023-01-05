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
  children,
}: TypographyProps) => {
  if (textElement === TextElement.Span) {
    return (
      <StyledTextSpan
        textStyle={textStyle}
        color={color}
        marginTop={marginTop}
        marginBottom={marginBottom}
      >
        {children}
      </StyledTextSpan>
    );
  }
  if (textElement === TextElement.Div) {
    return (
      <StyledTextDiv
        textStyle={textStyle}
        textAlign={textAlign}
        color={color}
        width={width}
        height={height}
        marginTop={marginTop}
        marginBottom={marginBottom}
      >
        {children}
      </StyledTextDiv>
    );
  }
  return null;
};

export default Typography;
