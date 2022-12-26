import { Bars } from "react-loader-spinner";
import { withTheme } from "styled-components";

import { Wrapper } from "./components";

type Props = {
  theme: {
    colors: {
      grey: string;
    };
  };
};

const Loader = ({ theme }: Props) => {
  return (
    <Wrapper>
      <Bars width="100" height="70" color={theme.colors.grey} visible={true} />
    </Wrapper>
  );
};

export default withTheme(Loader);
