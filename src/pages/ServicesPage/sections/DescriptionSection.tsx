import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import {
  FlexDirection,
  SectionType,
  TextAlign,
  TextColor,
  TextElement,
  TextStyle,
} from "types/index";

const DescriptionSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={56}>
      <Flex direction={FlexDirection.Column} rowGap={15}>
        <Typography
          textStyle={TextStyle.Headline6_bold}
          color={TextColor.Primary}
          textElement={TextElement.Div}
          textAlign={TextAlign.Center}
        >
          Services
        </Typography>
        <Typography
          textStyle={TextStyle.Headline1_extrabold}
          color={TextColor.Black}
          textElement={TextElement.Div}
          textAlign={TextAlign.Center}
        >
          Data Analytics Services
        </Typography>
        <Typography
          textStyle={TextStyle.Paragraph1_regular}
          color={TextColor.Gray}
          textElement={TextElement.Div}
          textAlign={TextAlign.Center}
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
