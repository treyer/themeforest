import { forwardRef } from "react";

import Flex from "components/elements/Flex";
import { ICON_URLS } from "constants/iconPaths";
import MenuButton from "../MenuButton";
import { DropdownWrapper, IconArrow } from "./styled";
import { DropdownProps } from "./types";

const Dropdown = ({ buttonsList, onClickCallback }: DropdownProps) => {
  return (
    <DropdownWrapper direction="column">
      {buttonsList.map((el) => (
        <Flex
          key={el.id}
          paddingTop={10}
          paddingBottom={10}
          paddingLeft={20}
          paddingRight={20}
          justify="space-between"
          onClickCallback={onClickCallback}
        >
          <MenuButton link={el.link}>{el.description}</MenuButton>
          <IconArrow url={ICON_URLS.ArrowRight} width={8} height={14} />
        </Flex>
      ))}
    </DropdownWrapper>
  );
};

export default forwardRef(Dropdown);
