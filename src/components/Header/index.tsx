import Button from "components/Button";
import Logo from "components/Logo";
import MenuButton from "components/controls/MenuButton";
import { Wrapper, Inner, ButtonsBlock } from "./styled";

import { ICON_URLS } from "constants/iconPaths";
import { LogoSize } from "types/index";

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo type={LogoSize.Large} />
        <ButtonsBlock>
          <MenuButton link="/">Home</MenuButton>
          <MenuButton link="/solutions">Solutions</MenuButton>
          <MenuButton link="pages">Pages</MenuButton>
          <MenuButton link="/elements">Elements</MenuButton>
          <MenuButton link="/blog">Blog</MenuButton>
          <MenuButton link="/contacts">Contacts</MenuButton>
        </ButtonsBlock>
        <Button iconUrl={ICON_URLS.IconPlayCircle}>Watch the demo</Button>
      </Inner>
    </Wrapper>
  );
};

export default Header;
