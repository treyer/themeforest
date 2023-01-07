import Counter from "components/Counter/Counter";
import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import Typography from "components/Typography/Typography";
import {
  FlexJustify,
  SectionDirection,
  SectionType,
  TextColor,
  TextStyle,
} from "types/types";

const OverviewSection = () => {
  return (
    <Section
      type={SectionType.Narrow}
      marginTop={120}
      direction={SectionDirection.Column}
    >
      <Typography
        textStyle={TextStyle.Headline2_extrabold}
        color={TextColor.Black}
      >
        <Flex justify={FlexJustify.Center}>
          We provide services that guarantee your success
        </Flex>
      </Typography>
      <Flex marginTop={50}>
        <Flex width={540} justify={FlexJustify.SpaceBetween}>
          <Counter count="1830+" description="Project executed" width={159} />
          <Counter count="834+" description="Satisfied customers" width={159} />
          <Counter count="390" description="Data management" width={159} />
        </Flex>
        <Flex width={540}>
          <Typography
            textStyle={TextStyle.Paragraph1_regular}
            color={TextColor.Grey}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam
            finibus nec.
          </Typography>
        </Flex>
      </Flex>
    </Section>
  );
};

export default OverviewSection;
