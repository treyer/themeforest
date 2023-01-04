import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import Icon from "components/Icon/Icon";
import TestimonialCard from "components/TestimonialCard/TestimonialCard";
import Typography from "components/Typography/Typography";
import { Persons } from "constants/data";
import { ICON_URLS } from "constants/iconPaths";
import {
  FlexJustify,
  IconColor,
  SectionDirection,
  SectionType,
  TextColor,
  TextStyle,
} from "types/types";
import { ControlsWrapper } from "./components";

const TestimonialsSection = () => {
  return (
    <Section
      type={SectionType.Narrow}
      direction={SectionDirection.Column}
      marginTop={120}
    >
      <ControlsWrapper>
        <Flex justify={FlexJustify.Center}>
          <Icon
            url={ICON_URLS.ArrowLeft}
            width={12}
            height={21}
            color={IconColor.Secondary}
          />
        </Flex>
        <Flex justify={FlexJustify.Center}>
          <Icon
            url={ICON_URLS.ArrowRight}
            width={12}
            height={21}
            color={IconColor.Secondary}
          />
        </Flex>
      </ControlsWrapper>

      <Typography
        textStyle={TextStyle.Headline2_extrabold}
        color={TextColor.Black}
      >
        Testimonials
      </Typography>
      <Flex columnGap={30}>
        {Persons.map((person) => (
          <TestimonialCard
            key={person.id}
            imgUrl={person.imgUrl}
            personName={person.personName}
            personPosition={person.personPosition}
          >
            {person.about}
          </TestimonialCard>
        ))}
      </Flex>
    </Section>
  );
};

export default TestimonialsSection;
