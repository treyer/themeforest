import ButtonSimple from "components/controls/ButtonSimple";
import TextInput from "components/controls/TextInput";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { SectionType } from "types/index";

const ContactsFormSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={75}>
      <Flex columnGap={30} align="start">
        <Flex direction="column" align="start">
          <Typography variant="headline0_large_extrabold">
            How can we
          </Typography>
          <Typography variant="headline0_large_extrabold" color={"primary"}>
            help you?
          </Typography>
        </Flex>
        <Flex direction="column" marginTop={20} rowGap={20}>
          <Flex columnGap={30}>
            <TextInput placeholder="Your email" type="simple" bordered />
            <TextInput placeholder="Your name" type="simple" bordered />
          </Flex>
          <TextInput placeholder="Theme" type="simple" bordered />
          <TextInput
            element="textarea"
            placeholder="Your message"
            type="simple"
            bordered
          />
          <Flex justify="end">
            <ButtonSimple>Send</ButtonSimple>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default ContactsFormSection;
