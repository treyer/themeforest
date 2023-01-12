import Breadcrumbs from "components/Breadcrumbs";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { BREADCRUMBS_LIST } from "constants/common";
import { SectionType } from "types/index";
import { SectionWrapper } from "./styled";

const TitleSection = () => {
  return (
    <SectionWrapper>
      <Section type={SectionType.Narrow}>
        <Breadcrumbs links={BREADCRUMBS_LIST.Team} mode="dark" />
      </Section>
      <Section type={SectionType.Narrow} marginTop={130}>
        <Flex paddingBottom={90} columnGap={30} align="start">
          <Flex align="start">
            <Typography variant="headline1_extrabold" color="white">
              Our team
            </Typography>
          </Flex>
          <Flex align="start">
            <Typography variant="paragraph3_regular" color="white">
              Sed ut perspiciatis unde omnis iste natus error volupta
              accusantium doloremque laudantium, totam remiga aperiam, eaque
              ipsa. Phasellus tristique eu nisl eu consectetur. Morbi urna
              massa, imperdiet in mauris et, euismod vestibulum lacus. Integer
              enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed
              quis lobortis eros. Fusce id commodo libero.
            </Typography>
          </Flex>
        </Flex>
      </Section>
    </SectionWrapper>
  );
};

export default TitleSection;
