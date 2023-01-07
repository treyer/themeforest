import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Flex from "components/elements/Flex/Flex";
import Typography from "components/Typography/Typography";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import { FlexDirection, FlexJustify, TextColor, TextStyle } from "types/types";
import { BREADCRUMBS_LIST } from "constants/common";
import OurMissionSection from "./sections/OurMissionSection";

const AboutPage = () => {
  return (
    <>
      <Flex
        direction={FlexDirection.Column}
        justify={FlexJustify.Start}
        paddingTop={100}
        paddingBottom={160}
      >
        <Typography
          textStyle={TextStyle.Headline1_extrabold}
          color={TextColor.Black}
        >
          About Us
        </Typography>
        <Breadcrumbs
          links={BREADCRUMBS_LIST.About}
          position={FlexJustify.Center}
        />
      </Flex>
      <WhoWeAreSection />
      <OurMissionSection />
    </>
  );
};

export default AboutPage;
