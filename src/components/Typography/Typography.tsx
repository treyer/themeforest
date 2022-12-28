import { TypographyStyle } from "types/types";
import StyledText from "./components";

type Props = {
  textStyle: TypographyStyle;
  color?: string;
  children: string;
};

const COLOR_BLACK = "#000000";

const Typography = ({ textStyle, color = COLOR_BLACK, children }: Props) => {
  return (
    <StyledText textStyle={textStyle} color={color}>
      {children}
    </StyledText>
  );
};

export default Typography;
