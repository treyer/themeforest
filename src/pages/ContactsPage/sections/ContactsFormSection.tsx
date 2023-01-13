import ButtonSimple from "components/controls/ButtonSimple";
import TextInput from "components/controls/TextInput";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Icon from "components/Icon";
import Typography from "components/Typography";
import { CONTACTS_LIST } from "constants/common";
import { SectionType } from "types/index";

const ContactsFormSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={75} direction="column">
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
      <Flex justify="start" width={610} align="start">
        {CONTACTS_LIST.map((contact) => (
          <Flex key={contact.id} direction="column" rowGap={5} align="start">
            <Flex columnGap={15} justify="start" align="start">
              <Icon
                url={contact.iconUrl}
                width={15}
                height={17}
                color="black"
              />
              <Typography variant="headline7_semibold">
                {contact.name}
              </Typography>
            </Flex>
            <Flex>
              <Typography
                element="div"
                variant="paragraph2_regular"
                color="gray"
              >
                {contact.valueShort}
              </Typography>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
};

export default ContactsFormSection;
