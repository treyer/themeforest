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
  TextColor,
  TextStyle,
} from "types/types";
import { ImageSolutions, TextStressed } from "../components";

const FeaturesSection = () => {
  return (
    <>
      <Section type={SectionType.Narrow} marginTop={120}>
        <Flex width={540}>
          <Typography
            textStyle={TextStyle.Headline0_extrabold}
            color={TextColor.Black}
          >
            <div>
              The <TextStressed>newest</TextStressed>
              <br /> business analytics platform
            </div>
          </Typography>
        </Flex>
        <Flex
          direction={FlexDirection.Column}
          align={FlexAlign.Start}
          width={540}
        >
          <Typography
            textStyle={TextStyle.Paragraph1_regular}
            color={TextColor.Grey}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis etquasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
          <Flex justify={FlexJustify.Start} marginTop={30}>
            <ButtonSimple size={ButtonSimpleSize.Big}>
              Discover more
            </ButtonSimple>
          </Flex>
        </Flex>
      </Section>

      <Section type={SectionType.Wide} marginTop={120} columnGap={46}>
        <ImageSolutions />
        <Flex justify={FlexJustify.Start} align={FlexAlign.Center}>
          <Flex
            direction={FlexDirection.Column}
            justify={FlexJustify.Start}
            width={540}
            marginLeft={46}
            rowGap={30}
          >
            <Flex width="100%">
              <Typography
                textStyle={TextStyle.Headline2_extrabold}
                color={TextColor.Black}
              >
                <div>
                  Radically new solutions <br /> for data
                </div>
              </Typography>
            </Flex>
            <Typography
              textStyle={TextStyle.Paragraph1_regular}
              color={TextColor.Grey}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>
            <Flex width="100%">
              <ButtonSimple size={ButtonSimpleSize.Big}>
                Learn more
              </ButtonSimple>
            </Flex>
          </Flex>
        </Flex>
      </Section>
    </>
  );
};

export default FeaturesSection;
