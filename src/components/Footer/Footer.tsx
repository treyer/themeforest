import Icon from "components/Icon/Icon";
import { chevronDownPath } from "constants/iconPaths";
import {
  AdditionalData,
  Inner,
  LeftBlock,
  MainData,
  RightBlock,
  Wrapper,
} from "./components";

function Footer() {
  return (
    <Wrapper>
      <Inner>
        <MainData>
          <LeftBlock>LeftBlock</LeftBlock>
          <RightBlock>RightBlock</RightBlock>
        </MainData>
        <AdditionalData>Footer</AdditionalData>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
