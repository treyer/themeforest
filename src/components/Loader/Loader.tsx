import { LOADER_HEIGHT, LOADER_WIDTH } from "constants/common";
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
      <Bars
        width={LOADER_WIDTH}
        height={LOADER_HEIGHT}
        color={theme.colors.grey}
        visible={true}
      />
    </Wrapper>
  );
};

export default withTheme(Loader);
