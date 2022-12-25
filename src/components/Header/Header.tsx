import Logo from "components/Logo/Logo";
import { LogoSize } from "types/types";
import { Wrapper, Inner } from "./components";

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo type={LogoSize.large} />
      </Inner>
    </Wrapper>
  );
};

export default Header;
