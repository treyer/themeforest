import { Bars } from "react-loader-spinner";
import { withTheme } from "styled-components";

import { Wrapper } from "./styled";
import { LoaderProps } from "./types";

const LOADER_WIDTH = 100;
const LOADER_HEIGHT = 70;

const Loader = ({ theme }: LoaderProps) => {
  return (
    <Wrapper loaderWidth={LOADER_WIDTH} loaderHeight={LOADER_HEIGHT}>
      <Bars
        width={LOADER_WIDTH}
        height={LOADER_HEIGHT}
        color={theme.colors.gray}
        visible={true}
      />
    </Wrapper>
  );
};

export default withTheme(Loader);
