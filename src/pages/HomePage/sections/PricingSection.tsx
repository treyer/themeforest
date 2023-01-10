import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import PriceCard from "components/PriceCard";
import Typography from "components/Typography";
import { PricingCards } from "constants/data";
import { useState } from "react";
import { SectionType } from "types/index";

const PricingSection = () => {
  const [cardChosenIndex, setCardChosenIndex] = useState(2);

  const handleCardSelect = (index: number) => {
    setCardChosenIndex(index);
  };

  return (
    <Section type={SectionType.Narrow} direction="column" marginTop={120}>
      <Typography variant="headline2_extrabold">Our pricing</Typography>
      <Flex columnGap={30}>
        {PricingCards.map((card, index) => (
          <PriceCard
            key={card.id}
            index={index}
            name={card.name}
            services={card.services}
            priceMonth={card.price.month}
            priceYear={card.price.year}
            isActive={cardChosenIndex === index}
            setCardSelectCallback={handleCardSelect}
          />
        ))}
      </Flex>
    </Section>
  );
};

export default PricingSection;
