import ButtonSimple from "components/controls/ButtonSimple";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import {
  ButtonSimpleSize,
  FlexDirection,
  SectionType,
  TextAlign,
  TextColor,
  TextElement,
  TextStyle,
} from "types/index";

const ContactUsSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120} marginBottom={100}>
      <Flex direction={FlexDirection.Column}>
        <Typography
          textStyle={TextStyle.Headline2_extrabold}
          color={TextColor.Black}
          marginTop={100}
        >
          Do you need help?
        </Typography>
        <Typography
          textStyle={TextStyle.Paragraph2_regular}
          textAlign={TextAlign.Center}
          color={TextColor.Gray}
          textElement={TextElement.Div}
          width={540}
          marginTop={30}
          marginBottom={30}
        >
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </Typography>
        <ButtonSimple size={ButtonSimpleSize.Big}>Contact Us</ButtonSimple>
      </Flex>
    </Section>
  );
};

export default ContactUsSection;