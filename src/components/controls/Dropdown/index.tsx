import Flex from "components/elements/Flex";
import Icon from "components/Icon";
import Typography from "components/Typography";
import { ICON_URLS } from "constants/iconPaths";
import { useState } from "react";
import { ContentWrapper, HeaderWrapper } from "./styled";

import { DropdownProps } from "./types";

const Dropdown = ({ title, content }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <Flex direction="column">
      <HeaderWrapper opened={isOpened} onClick={toggleDropdown}>
        <Typography variant="paragraph1_regular">{title}</Typography>
        {isOpened && (
          <Icon
            url={ICON_URLS.ChevronUp}
            width={12}
            height={15}
            color="black"
          />
        )}
        {!isOpened && (
          <Icon
            url={ICON_URLS.ChevronRight}
            width={15}
            height={20}
            color="black"
          />
        )}
      </HeaderWrapper>

      {isOpened && (
        <ContentWrapper>
          <Typography variant="paragraph3_regular">{content}</Typography>
        </ContentWrapper>
      )}
    </Flex>
  );
};

export default Dropdown;
