import Logo from "components/Logo/Logo";
import MenuButton from "components/MenuButton/MenuButton";
import { LogoSize } from "types/types";
import { Wrapper, Inner, ButtonsBlock } from "./components";

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo type={LogoSize.large} />
        <ButtonsBlock>
          <MenuButton to="/">Home</MenuButton>
          <MenuButton to="/">Solutions</MenuButton>
          <MenuButton to="/">Pages</MenuButton>
          <MenuButton to="/">Elements</MenuButton>
          <MenuButton to="/blog">Blog</MenuButton>
          <MenuButton to="/contacts">Contacts</MenuButton>
        </ButtonsBlock>
      </Inner>
    </Wrapper>
  );
};

export default Header;
