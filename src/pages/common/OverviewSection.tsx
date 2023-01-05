import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import Typography from "components/Typography/Typography";
import {
  FlexAlign,
  FlexDirection,
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
        <Flex width={540}>
          <Flex
            direction={FlexDirection.Column}
            columnGap={10}
            align={FlexAlign.Start}
          >
            <Typography
              textStyle={TextStyle.Paragraph0_bold}
              color={TextColor.Primary}
            >
              1830+
            </Typography>
            <Typography
              textStyle={TextStyle.Paragraph2_regular}
              color={TextColor.Grey}
            >
              Project executed
            </Typography>
          </Flex>
          <Flex
            direction={FlexDirection.Column}
            columnGap={10}
            align={FlexAlign.Start}
          >
            <Typography
              textStyle={TextStyle.Paragraph0_bold}
              color={TextColor.Primary}
            >
              834+
            </Typography>
            <Typography
              textStyle={TextStyle.Paragraph2_regular}
              color={TextColor.Grey}
            >
              Satisfied customers
            </Typography>
          </Flex>
          <Flex
            direction={FlexDirection.Column}
            columnGap={10}
            align={FlexAlign.Start}
          >
            <Typography
              textStyle={TextStyle.Paragraph0_bold}
              color={TextColor.Primary}
            >
              390
            </Typography>
            <Typography
              textStyle={TextStyle.Paragraph2_regular}
              color={TextColor.Grey}
            >
              Data management
            </Typography>
          </Flex>
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
