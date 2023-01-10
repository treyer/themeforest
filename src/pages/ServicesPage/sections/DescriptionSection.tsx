import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { FlexDirection, SectionType } from "types/index";

const DescriptionSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={56}>
      <Flex direction={FlexDirection.Column} rowGap={15}>
        <Typography
          variant="headline6_bold"
          color="primary"
          element="div"
          textAlign="center"
        >
          Services
        </Typography>
        <Typography
          variant="headline1_extrabold"
          element="div"
          textAlign="center"
        >
          Data Analytics Services
        </Typography>
        <Typography
          variant="paragraph1_regular"
          color="gray"
          element="div"
          textAlign="center"
          width={730}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quaeab illo inventore.
        </Typography>
      </Flex>
    </Section>
  );
};
export default DescriptionSection;
