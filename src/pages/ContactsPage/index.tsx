import Breadcrumbs from "components/Breadcrumbs";
import Section from "components/elements/Section";
import { BREADCRUMBS_LIST } from "constants/common";
import { SectionType } from "types/index";
import ContactsFormSection from "./sections/ContactsFormSection";
import MapSection from "./sections/MapSection";

const ContactsPage = () => {
  return (
    <>
      <Section type={SectionType.Narrow}>
        <Breadcrumbs links={BREADCRUMBS_LIST.Contacts} />
      </Section>
      <ContactsFormSection />
      <MapSection />
    </>
  );
};

export default ContactsPage;
