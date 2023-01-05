import ReadMoreButton from "components/controls/ReadMoreButton/ReadMoreButton";
import Flex from "components/elements/Flex/Flex";
import Typography from "components/Typography/Typography";
import { FlexAlign, FlexDirection, TextColor, TextStyle } from "types/types";
import { Wrapper } from "./components";
import { ServiceCardProps } from "./types";

const ServiceCard = ({ iconUrl, header, content }: ServiceCardProps) => {
  return (
    <Wrapper>
      <Flex direction={FlexDirection.Column} align={FlexAlign.Start}>
        <img src={iconUrl} alt={header} width={84} height={70} />
        <Typography
          textStyle={TextStyle.Headline4_bold}
          color={TextColor.Black}
          marginTop={25}
        >
          {header}
        </Typography>
        <Typography
          textStyle={TextStyle.Paragraph2_regular}
          color={TextColor.Grey}
          marginTop={16}
          marginBottom={20}
        >
          {content}
        </Typography>
        <ReadMoreButton />
      </Flex>
    </Wrapper>
  );
};

export default ServiceCard;
