import Breadcrumbs from "components/Breadcrumbs";
import Section from "components/elements/Section";
import { BREADCRUMBS_LIST } from "constants/common";
import ContactUsSection from "pages/common-sections/ContactUsSection";
import DescriptionSection from "pages/common-sections/DescriptionSection";
import SubscribeSection from "pages/common-sections/SubscribeSection";
import { SectionType } from "types/index";
import FAQListSection from "./sections/FAQListSection";

const FAQsPage = () => {
  return (
    <>
      <Section type={SectionType.Narrow}>
        <Breadcrumbs links={BREADCRUMBS_LIST.FAQs} />
      </Section>
      <DescriptionSection
        preHead="FAQs"
        head="Frequently asked questions"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam."
      />
      <FAQListSection />
      <ContactUsSection />
      <SubscribeSection />
    </>
  );
};

export default FAQsPage;
