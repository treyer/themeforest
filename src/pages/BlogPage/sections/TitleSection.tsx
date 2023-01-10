import Breadcrumbs from "components/Breadcrumbs";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { BREADCRUMBS_LIST } from "constants/common";
import {
  FlexDirection,
  FlexJustify,
  SectionType,
  TextAlign,
  TextColor,
  TextElement,
  TextStyle,
} from "types/index";

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
          textStyle={TextStyle.Headline1_extrabold}
          color={TextColor.Black}
          textElement={TextElement.Div}
          width={730}
          textAlign={TextAlign.Center}
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
