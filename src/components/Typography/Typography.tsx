import { TypographyStyle } from "types/types";
import StyledText from "./components";

type Props = {
  textStyle: TypographyStyle;
  color?: string;
  children: string;
};

const Typography = ({ textStyle, color, children }: Props) => {
  return (
    <StyledText textStyle={textStyle} color={color}>
      {children}
    </StyledText>
  );
};

export default Typography;
