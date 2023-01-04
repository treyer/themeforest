import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import PriceCard from "components/PriceCard/PriceCard";
import Typography from "components/Typography/Typography";
import { PricingCards } from "constants/data";
import {
  SectionDirection,
  SectionType,
  TextColor,
  TextStyle,
} from "types/types";

const PricingSection = () => {
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
        {PricingCards.map((card) => (
          <PriceCard
            key={card.id}
            name={card.name}
            services={card.services}
            priceMonth={card.price.month}
            priceYear={card.price.year}
          />
        ))}
      </Flex>
    </Section>
  );
};

export default PricingSection;
