import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { SectionType } from "types/index";
import { DescriptionSectionProps } from "./types";

const DescriptionSection = ({
  preHead,
  head,
  text,
}: DescriptionSectionProps) => {
  return (
    <Section type={SectionType.Narrow} marginTop={56}>
      <Flex direction="column" rowGap={15}>
        <Typography
          variant="headline6_bold"
          color="primary"
          element="div"
          textAlign="center"
        >
          {preHead}
        </Typography>
        <Typography
          variant="headline1_extrabold"
          element="div"
          textAlign="center"
        >
          {head}
        </Typography>
        <Typography
          variant="paragraph1_regular"
          color="gray"
          element="div"
          textAlign="center"
          width={730}
        >
          {text}
        </Typography>
      </Flex>
    </Section>
  );
};
export default DescriptionSection;
