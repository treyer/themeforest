import Flex from "components/elements/Flex";
import Image from "components/elements/Image";
import Typography from "components/Typography";
import { Wrapper } from "./styled";
import { RelatedPostcardProps } from "./types";

const RelatedPostCard = ({
  imgUrl,
  date,
  header,
  text,
}: RelatedPostcardProps) => {
  return (
    <Wrapper>
      <Image src={imgUrl} width={215} height={171} alt={header} />
      <Flex direction="column" align="start">
        <Typography variant="paragraph3_regular" color="gray">
          {date}
        </Typography>
        <Typography variant="headline6_bold" marginTop={15}>
          {header}
        </Typography>
        <Typography variant="paragraph2_regular" marginTop={10} color="gray">
          {text}
        </Typography>
      </Flex>
    </Wrapper>
  );
};

export default RelatedPostCard;
