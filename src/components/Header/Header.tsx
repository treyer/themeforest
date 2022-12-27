import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";

import MenuButton from "components/MenuButton/MenuButton";
import { ICON_URLS } from "constants/iconPaths";
import { LogoSize } from "types/types";
import { Wrapper, Inner, ButtonsBlock } from "./components";

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo type={LogoSize.Large} />
        <ButtonsBlock>
          <MenuButton to="/">Home</MenuButton>
          <MenuButton to="/">Solutions</MenuButton>
          <MenuButton to={null} isSubmenu>
            Pages
          </MenuButton>
          <MenuButton to="/">Elements</MenuButton>
          <MenuButton to="/blog">Blog</MenuButton>
          <MenuButton to="/contacts">Contacts</MenuButton>
        </ButtonsBlock>
        <Button iconUrl={ICON_URLS.IconPlayCircle}>Watch the demo</Button>
      </Inner>
    </Wrapper>
  );
};

export default Header;
