import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Section from "components/elements/Section/Section";
import { BREADCRUMBS_LIST } from "constants/common";
import { SectionType } from "types/types";
import DescriptionSection from "./DescriptionSection";
import ServicesCardsSection from "./ServicesCardsSection";

const ServicesPage = () => {
  return (
    <>
      <Section type={SectionType.Narrow}>
        <Breadcrumbs links={BREADCRUMBS_LIST.Services} />
      </Section>
      <DescriptionSection />
      <ServicesCardsSection />
    </>
  );
};

export default ServicesPage;
