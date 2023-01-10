import Breadcrumbs from "components/Breadcrumbs";
import Section from "components/elements/Section";
import DescriptionSection from "./sections/DescriptionSection";
import ServicesCardsSection from "./sections/ServicesCardsSection";
import OverviewSection from "pages/common-sections/OverviewSection";
import ContactUsSection from "pages/common-sections/ContactUsSection";
import SubscribeSection from "pages/common-sections/SubscribeSection";

import { SectionType } from "types/index";
import { BREADCRUMBS_LIST } from "constants/common";

const ServicesPage = () => {
  return (
    <>
      <Section type={SectionType.Narrow}>
        <Breadcrumbs links={BREADCRUMBS_LIST.Services} />
      </Section>
      <DescriptionSection />
      <ServicesCardsSection />
      <OverviewSection />
      <ContactUsSection />
      <SubscribeSection />
    </>
  );
};

export default ServicesPage;