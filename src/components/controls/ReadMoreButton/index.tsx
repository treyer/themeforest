import Flex from "components/elements/Flex";
import Icon from "components/Icon";
import Typography from "components/Typography";
import { ICON_URLS } from "constants/iconPaths";
import { FlexClickable } from "./styled";

const ReadMoreButton = () => {
  return (
    <FlexClickable>
      <Typography
        className="text-read-more"
        variant="headline7_semibold"
        element="div"
        color="primary"
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
          color="primary"
        />
      </Flex>
    </FlexClickable>
  );
};

export default ReadMoreButton;
