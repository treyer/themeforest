import Button from "components/Button";
import Logo from "components/Logo";

import MenuButton from "components/MenuButton";
import { ICON_URLS } from "constants/iconPaths";
import { LogoSize } from "types/index";
import { Wrapper, Inner, ButtonsBlock } from "./styled";

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo type={LogoSize.Large} />
        <ButtonsBlock>
          <MenuButton to="/">Home</MenuButton>
          <MenuButton to="/solutions">Solutions</MenuButton>
          <MenuButton to={null} isSubmenu>
            Pages
          </MenuButton>
          <MenuButton to="/elements">Elements</MenuButton>
          <MenuButton to="/blog">Blog</MenuButton>
          <MenuButton to="/contacts">Contacts</MenuButton>
        </ButtonsBlock>
        <Button iconUrl={ICON_URLS.IconPlayCircle}>Watch the demo</Button>
      </Inner>
    </Wrapper>
  );
};

export default Header;
