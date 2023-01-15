import Accordion from "components/Accordion";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import { SectionType } from "types/index";
import { FAQData } from "./mocks";

const FAQListSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120}>
      <Flex direction="column" rowGap={20}>
        {FAQData.map(({ id, title, content }) => (
          <Accordion key={id} type="advanced" title={title} content={content} />
        ))}
      </Flex>
    </Section>
  );
};

export default FAQListSection;
