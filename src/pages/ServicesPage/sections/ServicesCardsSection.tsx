import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import ServiceCard from "components/ServiceCard";

import { SectionType } from "types/index";
import { ServicesCards } from "./mocks";

const ServicesCardsSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120}>
      <Flex columnGap={30} rowGap={30} flexWrap>
        {ServicesCards.map((card) => (
          <ServiceCard
            key={card.id}
            iconUrl={card.iconUrl}
            header={card.header}
            content={card.content}
          />
        ))}
      </Flex>
    </Section>
  );
};

export default ServicesCardsSection;
