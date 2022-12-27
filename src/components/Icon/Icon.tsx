import Wrapper from "./components";

type Props = {
  path: string;
  color: string;
  width: number;
  height: number;
};

const Icon = ({ path, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <path d={path} />
    </Wrapper>
  );
};

export default Icon;
