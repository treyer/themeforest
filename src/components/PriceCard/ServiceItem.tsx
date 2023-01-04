import Flex from "components/elements/Flex/Flex";
import Icon from "components/Icon/Icon";
import Typography from "components/Typography/Typography";
import { ICON_URLS } from "constants/iconPaths";
import { FlexJustify, IconColor, TextColor, TextStyle } from "types/types";
import { ServiceItemProps } from "./types";

const ServiceItem = ({ isCardActive, text }: ServiceItemProps) => {
  return (
    <Flex columnGap={11} justify={FlexJustify.Start}>
      <Icon
        width={17}
        height={12}
        url={ICON_URLS.CheckMark}
        color={isCardActive ? IconColor.White : IconColor.Primary}
      ></Icon>
      <Typography
        textStyle={TextStyle.Paragraph3_regular}
        color={isCardActive ? TextColor.White : TextColor.Black}
      >
        {text}
      </Typography>
    </Flex>
  );
};

export default ServiceItem;
