import Counter from "components/Counter";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { FlexAlign, FlexDirection, SectionType } from "types/index";

const OverviewSection = () => {
  return (
    <Section type={SectionType.Narrow}>
      <Flex
        direction={FlexDirection.Column}
        rowGap={10}
        paddingTop={100}
        paddingBottom={100}
      >
        <Typography variant="headline1_extrabold">Ensome in numbers</Typography>
        <Flex height={244}>
          <Counter
            count="1830+"
            description="Project executed"
            width={255}
            align={FlexAlign.Center}
          />
          <Counter
            count="220"
            description="Data analytics"
            width={255}
            align={FlexAlign.Center}
          />
          <Counter
            count="390"
            description="Data management"
            width={255}
            align={FlexAlign.Center}
          />
          <Counter
            count="834+"
            description="Satisfied customers"
            width={255}
            align={FlexAlign.Center}
          />
        </Flex>
      </Flex>
    </Section>
  );
};

export default OverviewSection;
