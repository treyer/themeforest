import ButtonSimple from "components/controls/ButtonSimple";
import TextInput from "components/controls/TextInput";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { CONTACTS_LIST } from "constants/common";

import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  SectionType,
  TextColor,
  TextInputType,
  TextStyle,
} from "types/index";

const ContactSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120}>
      <Flex paddingTop={120} paddingBottom={170} align={FlexAlign.Start}>
        <Flex direction={FlexDirection.Column} width={540} rowGap={80}>
          <Flex direction={FlexDirection.Column} rowGap={24}>
            <Typography
              textStyle={TextStyle.Headline2_extrabold}
              color={TextColor.Black}
            >
              Left questions? Contacts us now for a free consultation and free
              trial!
            </Typography>
            <Typography
              textStyle={TextStyle.Paragraph2_regular}
              color={TextColor.Gray}
            >
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </Typography>
          </Flex>
          <Flex direction={FlexDirection.Column} rowGap={24}>
            {CONTACTS_LIST.map((contact) => (
              <Flex
                key={contact.id}
                direction={FlexDirection.Column}
                align={FlexAlign.Start}
                rowGap={2}
              >
                <Typography
                  textStyle={TextStyle.Paragraph2_regular}
                  color={TextColor.Gray}
                >
                  {contact.name}
                </Typography>
                <Typography
                  textStyle={TextStyle.Paragraph2_bold}
                  color={TextColor.Black}
                >
                  {contact.value}
                </Typography>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex
          direction={FlexDirection.Column}
          width={345}
          padding={50}
          justify={FlexJustify.Start}
          align={FlexAlign.Start}
          rowGap={30}
        >
          <Typography textStyle={TextStyle.Headline3_extrabold}>
            Contact Us
          </Typography>
          <Flex
            direction={FlexDirection.Column}
            align={FlexAlign.Start}
            rowGap={20}
          >
            <TextInput
              type={TextInputType.Labeled}
              label="Name"
              placeholder="Name"
            />
            <TextInput
              type={TextInputType.Labeled}
              label="Email"
              placeholder="Email"
            />
            <TextInput
              type={TextInputType.Labeled}
              label="Theme"
              placeholder="Theme"
            />
            <TextInput
              type={TextInputType.Labeled}
              label="Message"
              placeholder="Message"
            />
          </Flex>
          <Flex justify={FlexJustify.End}>
            <ButtonSimple>Send</ButtonSimple>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default ContactSection;
