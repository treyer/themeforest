import ButtonSimple from "components/controls/ButtonSimple";
import TextInput from "components/controls/TextInput";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { CONTACTS_LIST } from "constants/common";

import { SectionType, TextInputType } from "types/index";

const ContactSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120}>
      <Flex paddingTop={120} paddingBottom={170} align="start">
        <Flex direction="column" width={540} rowGap={80}>
          <Flex direction="column" rowGap={24}>
            <Typography variant="headline2_extrabold">
              Left questions? Contacts us now for a free consultation and free
              trial!
            </Typography>
            <Typography variant="paragraph2_regular" color="gray">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </Typography>
          </Flex>
          <Flex direction="column" rowGap={24}>
            {CONTACTS_LIST.map((contact) => (
              <Flex
                key={contact.id}
                direction="column"
                align="start"
                rowGap={2}
              >
                <Typography variant="paragraph2_regular" color="gray">
                  {contact.name}
                </Typography>
                <Typography variant="paragraph2_bold">
                  {contact.value}
                </Typography>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex
          direction="column"
          width={345}
          padding={50}
          justify="start"
          align="start"
          rowGap={30}
        >
          <Typography variant="headline3_extrabold">Contact Us</Typography>
          <Flex direction="column" align="start" rowGap={20}>
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
          <Flex justify="end">
            <ButtonSimple>Send</ButtonSimple>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default ContactSection;
