import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import ServiceCard from "components/ServiceCard";
import { ServicesCards } from "constants/data";
import { SectionType } from "types/index";

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
