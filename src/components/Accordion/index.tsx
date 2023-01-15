import Flex from "components/elements/Flex";
import Icon from "components/Icon";
import Typography from "components/Typography";
import { ICON_URLS } from "constants/iconPaths";
import { useState } from "react";
import { ContentWrapper, HeaderWrapper } from "./styled";

import { AccordionProps } from "./types";

const Accordion = ({ title, content, type }: AccordionProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpened((prev) => !prev);
  };

  const iconOpened =
    type === "simple"
      ? { url: ICON_URLS.ChevronUp, width: 12, height: 15 }
      : { url: ICON_URLS.Minus, width: 18, height: 18 };
  const iconClosed =
    type === "simple"
      ? { url: ICON_URLS.ChevronRight, width: 15, height: 20 }
      : { url: ICON_URLS.PLus, width: 18, height: 18 };

  return (
    <Flex direction="column">
      <HeaderWrapper opened={isOpened} type={type} onClick={toggleDropdown}>
        <Typography
          variant={type === "simple" ? "paragraph1_regular" : "headline4_bold"}
          color={isOpened && type === "advanced" ? "primary" : "black"}
        >
          {title}
        </Typography>
        <Icon
          url={isOpened ? iconOpened.url : iconClosed.url}
          width={isOpened ? iconOpened.width : iconClosed.width}
          height={isOpened ? iconOpened.height : iconClosed.height}
          color={isOpened && type === "advanced" ? "primary" : "black"}
        />
      </HeaderWrapper>
      {isOpened && (
        <ContentWrapper type={type}>
          <Typography
            variant={
              type === "simple" ? "paragraph3_regular" : "paragraph1_regular"
            }
          >
            {content}
          </Typography>
        </ContentWrapper>
      )}
    </Flex>
  );
};

Accordion.defaultProps = {
  type: "simple",
};

export default Accordion;
