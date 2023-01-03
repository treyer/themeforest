import ButtonSimple from "components/controls/ButtonSimple/ButtonSimple";
import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import Typography from "components/Typography/Typography";
import {
  ButtonSimpleSize,
  FlexAlign,
  FlexDirection,
  FlexJustify,
  SectionType,
  TypographyStyle,
} from "types/types";
import { ImageHome, TextBlack, TextGrey, TextStressed } from "./components";

const HomePage = () => {
  return (
    <>
      <Section type={SectionType.Narrow} marginTop={73}>
        <Flex width={540}>
          <Typography textStyle={TypographyStyle.Headline1_extrabold}>
            <TextBlack>
              Find true power in your data with{" "}
              <TextStressed>Ensome</TextStressed>
            </TextBlack>
          </Typography>
        </Flex>
        <Flex width={350}>
          <Typography textStyle={TypographyStyle.Paragraph2_regular}>
            <TextGrey>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi.
            </TextGrey>
          </Typography>
        </Flex>
      </Section>

      <Section type={SectionType.Wide} marginTop={90}>
        <ImageHome />
      </Section>

      <Section type={SectionType.Narrow} marginTop={120}>
        <Flex width={540}>
          <Typography textStyle={TypographyStyle.Headline0_extrabold}>
            <TextBlack>
              The <TextStressed>newest</TextStressed>
              <br /> business analytics platform
            </TextBlack>
          </Typography>
        </Flex>
        <Flex
          direction={FlexDirection.Column}
          align={FlexAlign.Start}
          width={540}
        >
          <Typography textStyle={TypographyStyle.Paragraph1_regular}>
            <TextGrey>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis etquasi architecto beatae vitae
              dicta sunt explicabo.
            </TextGrey>
          </Typography>
          <Flex justify={FlexJustify.Start} marginTop={30}>
            <ButtonSimple size={ButtonSimpleSize.Big}>
              Discover more
            </ButtonSimple>
          </Flex>
        </Flex>
      </Section>
      <Section type={SectionType.Wide} marginTop={120}></Section>
    </>
  );
};

export default HomePage;
