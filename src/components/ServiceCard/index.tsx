import ReadMoreButton from "components/controls/ReadMoreButton";
import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { FlexAlign, FlexDirection } from "types/index";
import { Wrapper } from "./styled";
import { ServiceCardProps } from "./types";

const ServiceCard = ({ iconUrl, header, content }: ServiceCardProps) => {
  return (
    <Wrapper>
      <Flex direction={FlexDirection.Column} align={FlexAlign.Start}>
        <img src={iconUrl} alt={header} width={84} height={70} />
        <Typography variant="headline4_bold" marginTop={25}>
          {header}
        </Typography>
        <Typography
          variant="paragraph2_regular"
          color="gray"
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
