import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Section from "components/elements/Section/Section";
import { BREADCRUMBS_LIST } from "constants/common";
import OverviewSection from "pages/common/OverviewSection";
import ContactUsSection from "pages/HomePage/ContactUsSection";
import { SectionType } from "types/types";
import DescriptionSection from "./DescriptionSection";
import ServicesCardsSection from "./ServicesCardsSection";
import SubscribeSection from "./SubscribeSection";

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
