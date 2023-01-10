import ReadMoreButton from "components/controls/ReadMoreButton";
import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { FlexAlign, FlexDirection, TextColor, TextStyle } from "types/index";
import { Wrapper } from "./styled";
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
          color={TextColor.Gray}
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
