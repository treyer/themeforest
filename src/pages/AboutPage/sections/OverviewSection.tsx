import Counter from "components/Counter/Counter";
import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import Typography from "components/Typography/Typography";
import {
  FlexAlign,
  FlexDirection,
  SectionType,
  TextColor,
  TextStyle,
} from "types/types";

const OverviewSection = () => {
  return (
    <Section type={SectionType.Narrow}>
      <Flex
        direction={FlexDirection.Column}
        rowGap={10}
        paddingTop={100}
        paddingBottom={100}
      >
        <Typography
          textStyle={TextStyle.Headline1_extrabold}
          color={TextColor.Black}
        >
          Ensome in numbers
        </Typography>
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
