import Breadcrumbs from "components/Breadcrumbs";
import Section from "components/elements/Section";
import DescriptionSection from "../common-sections/DescriptionSection";
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
      <DescriptionSection
        preHead="Services"
        head="Data Analytics Services"
        text=" Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quaeab illo inventore."
      />
      <ServicesCardsSection />
      <OverviewSection />
      <ContactUsSection />
      <SubscribeSection />
    </>
  );
};

export default ServicesPage;
