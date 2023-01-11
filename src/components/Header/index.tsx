import Button from "components/Button";
import Logo from "components/Logo";
import MenuButton from "components/controls/MenuButton";
import { Wrapper, Inner, ButtonsBlock } from "./styled";

import { ICON_URLS } from "constants/iconPaths";
import { LogoSize } from "types/index";
import DropDownMenu from "components/controls/DropdownMenu";

const DropdownButtons = [
  { id: 1, link: "/", description: "Home" },
  { id: 2, link: "/solutions", description: "Solutions" },
  { id: 3, link: "/blog", description: "Blog" },
  { id: 4, link: "/contacts", description: "Contacts" },
  { id: 5, link: "/team", description: "Our Team" },
  { id: 6, link: "/about", description: "About Us" },
  { id: 7, link: "/services", description: "Services" },
  { id: 8, link: "/faqs", description: "FAQ" },
];

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo type={LogoSize.Large} />
        <ButtonsBlock>
          <MenuButton link="/">Home</MenuButton>
          <MenuButton link="/solutions">Solutions</MenuButton>
          <DropDownMenu description="Pages" buttonsList={DropdownButtons} />
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
