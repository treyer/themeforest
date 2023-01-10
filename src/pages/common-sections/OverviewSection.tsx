import Counter from "components/Counter";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { SectionDirection, SectionType } from "types/index";

const OverviewSection = () => {
  return (
    <Section
      type={SectionType.Narrow}
      marginTop={120}
      direction={SectionDirection.Column}
    >
      <Typography variant="headline2_extrabold">
        <Flex justify="center">
          We provide services that guarantee your success
        </Flex>
      </Typography>
      <Flex marginTop={50}>
        <Flex width={540}>
          <Counter count="1830+" description="Project executed" width={159} />
          <Counter count="834+" description="Satisfied customers" width={159} />
          <Counter count="390" description="Data management" width={159} />
        </Flex>
        <Flex width={540}>
          <Typography variant="paragraph1_regular" color="gray">
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
