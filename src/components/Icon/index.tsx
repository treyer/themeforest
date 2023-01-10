import IconImage from "./styled";
import { IconProps } from "./types";

const Icon = (props: IconProps) => {
  return <IconImage {...props} />;
};

export default Icon;
