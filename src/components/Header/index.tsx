import Logo from "components/Logo";
import MenuButton from "components/controls/MenuButton";
import { Wrapper, Inner, ButtonsBlock } from "./styled";

import { LogoSize } from "types/index";
import DropDownMenu from "components/controls/DropdownMenu";
import { DROPDOWN_BUTTONS } from "constants/common";
import ButtonVideo from "components/controls/ButtonVideo";
import Modal from "components/Modal";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Inner>
        <Logo type={LogoSize.Large} />
        <ButtonsBlock>
          <MenuButton link="/">Home</MenuButton>
          <MenuButton link="/solutions">Solutions</MenuButton>
          <DropDownMenu description="Pages" buttonsList={DROPDOWN_BUTTONS} />
          <MenuButton link="/elements">Elements</MenuButton>
          <MenuButton link="/blog">Blog</MenuButton>
          <MenuButton link="/contacts">Contacts</MenuButton>
        </ButtonsBlock>
        <ButtonVideo clickCallback={openModal}>Watch the demo</ButtonVideo>
      </Inner>
      {isModalOpen && (
        <Modal width={200} height={200} closeCallback={closeModal}>
          Video
        </Modal>
      )}
    </Wrapper>
  );
};

export default Header;
