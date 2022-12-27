import IconImage from "./components";

type Props = {
  url: string;
  width: number;
  height: number;
  color?: string;
};

const Icon = (props: Props) => {
  return <IconImage {...props} />;
};

export default Icon;
