import { useState } from "react";

import MenuButton from "../MenuButton";
import Dropdown from "./Dropdown";
import {
  DropDownMenuWrapper,
  IconDropdown,
  MenuButtonWrapper,
  SubLayer,
} from "./styled";

import { ICON_URLS } from "constants/iconPaths";
import { DropDownMenuProps } from "./types";

const DropDownMenu = ({ description, buttonsList }: DropDownMenuProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleShowMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <DropDownMenuWrapper width={45}>
      <MenuButtonWrapper onClick={toggleShowMenu}>
        <MenuButton link="/someNotExistingLink" disabled>
          {description}
        </MenuButton>
        <IconDropdown
          url={isMenuOpened ? ICON_URLS.ChevronUp : ICON_URLS.ChevronDown}
          width={10}
          height={6}
        />
      </MenuButtonWrapper>
      {isMenuOpened && (
        <Dropdown buttonsList={buttonsList} onClickCallback={toggleShowMenu} />
      )}
      {isMenuOpened && <SubLayer onClick={toggleShowMenu} />}
    </DropDownMenuWrapper>
  );
};

export default DropDownMenu;
