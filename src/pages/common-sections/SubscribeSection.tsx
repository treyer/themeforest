import TextInputWithButton from "components/controls/TextInputWithButton/TextInputWithButton";
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
import { Wrapper } from "./components";

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
          <Typography
            textStyle={TextStyle.Headline2_extrabold}
            color={TextColor.White}
          >
            Subscribe to our newsletter
          </Typography>
          <Typography
            textStyle={TextStyle.Paragraph1_regular}
            color={TextColor.White}
          >
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
