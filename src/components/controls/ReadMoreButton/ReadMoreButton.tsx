import Flex from "components/elements/Flex/Flex";
import Icon from "components/Icon/Icon";
import Typography from "components/Typography/Typography";
import { ICON_URLS } from "constants/iconPaths";
import { IconColor, TextColor, TextElement, TextStyle } from "types/types";
import { FlexClickable } from "./components";

const ReadMoreButton = () => {
  return (
    <FlexClickable>
      <Typography
        className="text-read-more"
        textStyle={TextStyle.Headline7_semibold}
        textElement={TextElement.Div}
        color={TextColor.Primary}
        width={70}
        height={24}
      >
        Read more
      </Typography>
      <Flex width={20}>
        <Icon
          className="icon-read-more"
          url={ICON_URLS.ArrowRight}
          width={8}
          height={14}
          color={IconColor.Primary}
        />
      </Flex>
    </FlexClickable>
  );
};

export default ReadMoreButton;
