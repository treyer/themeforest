import TextInputWithButton from "components/controls/TextInputWithButton";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { FlexAlign, FlexDirection, SectionType } from "types/index";
import { Wrapper } from "./styled";

const SubscribeSection = () => {
  return (
    <Wrapper>
      <Section type={SectionType.Narrow} marginBottom={80} columnGap={30}>
        <Flex
          direction={FlexDirection.Column}
          width={540}
          align={FlexAlign.Start}
          rowGap={24}
        >
          <Typography variant="headline2_extrabold" color="white">
            Subscribe to our newsletter
          </Typography>
          <Typography variant="paragraph1_regular" color="white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </Typography>
        </Flex>
        <Flex width={540}>
          <Flex>
            <TextInputWithButton />
          </Flex>
        </Flex>
      </Section>
    </Wrapper>
  );
};

export default SubscribeSection;
