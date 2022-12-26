import { HeaderStyle, ParagraphStyle } from "types/types";
import StyledText from "./components";

type Props = {
  headerStyle?: HeaderStyle;
  paragraphStyle?: ParagraphStyle;
  children: string;
};

const Typography = ({ children, ...rest }: Props) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Typography;
