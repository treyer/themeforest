import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { TextStressed } from "../styled";

import { SectionType } from "types/index";

const TitleSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={75} columnGap={30}>
      <Flex>
        <Typography variant="headline1_extrabold">
          Find true power in your data with <TextStressed>Ensome</TextStressed>
        </Typography>
      </Flex>
      <Flex justify="start">
        <Typography
          variant="paragraph2_regular"
          color="gray"
          element="div"
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
