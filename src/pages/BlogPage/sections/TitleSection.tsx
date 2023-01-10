import Breadcrumbs from "components/Breadcrumbs";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { BREADCRUMBS_LIST } from "constants/common";
import { FlexDirection, FlexJustify, SectionType } from "types/index";

const TitleSection = () => {
  return (
    <Section type={SectionType.Narrow}>
      <Flex
        direction={FlexDirection.Column}
        rowGap={20}
        paddingTop={100}
        paddingBottom={100}
      >
        <Typography
          variant="headline1_extrabold"
          element="div"
          width={730}
          textAlign="center"
        >
          2022 software development <br />
          trends explained with benefits
        </Typography>
        <Breadcrumbs
          links={BREADCRUMBS_LIST.Blog}
          position={FlexJustify.Center}
        />
      </Flex>
    </Section>
  );
};

export default TitleSection;
