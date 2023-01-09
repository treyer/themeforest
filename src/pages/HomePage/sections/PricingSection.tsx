import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import PriceCard from "components/PriceCard/PriceCard";
import Typography from "components/Typography/Typography";
import { PricingCards } from "constants/data";
import { useState } from "react";
import {
  SectionDirection,
  SectionType,
  TextColor,
  TextStyle,
} from "types/types";

const PricingSection = () => {
  const [cardChosenIndex, setCardChosenIndex] = useState(2);

  const handleCardSelect = (index: number) => {
    setCardChosenIndex(index);
  };

  return (
    <Section
      type={SectionType.Narrow}
      direction={SectionDirection.Column}
      marginTop={120}
    >
      <Typography
        textStyle={TextStyle.Headline2_extrabold}
        color={TextColor.Black}
      >
        Our pricing
      </Typography>
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
