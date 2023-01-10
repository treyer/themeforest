import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { TextStressed } from "../styled";

import {
  FlexJustify,
  SectionType,
  TextColor,
  TextElement,
  TextStyle,
} from "types/index";

const TitleSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={75} columnGap={30}>
      <Flex>
        <Typography
          textStyle={TextStyle.Headline1_extrabold}
          color={TextColor.Black}
        >
          <div>
            Find true power in your data with{" "}
            <TextStressed>Ensome</TextStressed>
          </div>
        </Typography>
      </Flex>
      <Flex justify={FlexJustify.Start}>
        <Typography
          textStyle={TextStyle.Paragraph2_regular}
          color={TextColor.Gray}
          textElement={TextElement.Div}
          width={350}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </Typography>
      </Flex>
    </Section>
  );
};

export default TitleSection;
