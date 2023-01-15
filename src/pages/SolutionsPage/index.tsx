import Breadcrumbs from "components/Breadcrumbs";
import Section from "components/elements/Section";
import { BREADCRUMBS_LIST } from "constants/common";
import ContactUsSection from "pages/common-sections/ContactUsSection";
import DescriptionSection from "pages/common-sections/DescriptionSection";
import SubscribeSection from "pages/common-sections/SubscribeSection";
import TestimonialsSection from "pages/common-sections/TestimonialsSection";
import { SectionType } from "types/index";
import SolutionsSection from "./sections/SolutionsSection";
import WhyUsSection from "./sections/WhyUsSection";

const SolutionsPage = () => {
  return (
    <>
      <Section type={SectionType.Narrow}>
        <Breadcrumbs links={BREADCRUMBS_LIST.Solutions} />
      </Section>
      <DescriptionSection
        preHead="Solutions"
        head="Data analytics solutions"
        text="Getting ready for your success, we provide truly outstanding IT solutions."
      />
      <SolutionsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactUsSection />
      <SubscribeSection />
    </>
  );
};

export default SolutionsPage;
