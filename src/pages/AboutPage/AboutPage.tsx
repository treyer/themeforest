import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Flex from "components/elements/Flex/Flex";
import Typography from "components/Typography/Typography";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import MissionSection from "./sections/MissionSection";
import CustomersSection from "./sections/CustomersSection";
import OverviewSection from "./sections/OverviewSection";
import TestimonialsSection from "pages/common-sections/TestimonialsSection";

import {
  FlexDirection,
  FlexJustify,
  TestimonialCardVariant,
  TextColor,
  TextStyle,
} from "types/types";
import { BREADCRUMBS_LIST } from "constants/common";
import ContactSection from "./sections/ContactSection";
import SubscribeSection from "pages/common-sections/SubscribeSection";

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
      <MissionSection />
      <OverviewSection />
      <CustomersSection />
      <TestimonialsSection cardVariant={TestimonialCardVariant.ImgOutside} />
      <ContactSection />
      <SubscribeSection />
    </>
  );
};

export default AboutPage;
