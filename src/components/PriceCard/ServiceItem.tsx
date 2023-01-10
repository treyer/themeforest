import Flex from "components/elements/Flex";
import Icon from "components/Icon";
import Typography from "components/Typography";
import { ICON_URLS } from "constants/iconPaths";
import { ServiceItemProps } from "./types";

const ServiceItem = ({ isCardActive, text }: ServiceItemProps) => {
  return (
    <Flex columnGap={11} justify="start">
      <Icon
        width={17}
        height={12}
        url={ICON_URLS.CheckMark}
        color={isCardActive ? "white" : "primary"}
      />
      <Typography
        variant="paragraph3_regular"
        color={isCardActive ? "white" : "black"}
      >
        {text}
      </Typography>
    </Flex>
  );
};

export default ServiceItem;
