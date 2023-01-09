import DirectionControl from "components/controls/DirectionControl/DirectionControl";
import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import Slider from "components/Slider/Slider";
import TestimonialCard from "components/TestimonialCard/TestimonialCard";
import Typography from "components/Typography/Typography";
import { Persons } from "constants/data";
import { useRef } from "react";
import {
  Direction,
  FlexJustify,
  SectionDirection,
  SectionType,
  SliderHandle,
  TestimonialCardVariant,
  TextColor,
  TextStyle,
} from "types/types";
import { ControlsWrapper } from "./components";

type Props = {
  cardVariant?: TestimonialCardVariant;
};

const TestimonialsSection = ({
  cardVariant = TestimonialCardVariant.ImgInside,
}: Props) => {
  const sliderEl = useRef<SliderHandle>(null);
  const itemsToShow = cardVariant === TestimonialCardVariant.ImgInside ? 3 : 2;

  const handleForwardClick = () => {
    if (sliderEl.current) {
      sliderEl.current.forward();
    }
  };

  const handleBackwardClick = () => {
    if (sliderEl.current) {
      sliderEl.current.backward();
    }
  };

  return (
    <Section
      type={SectionType.Narrow}
      direction={SectionDirection.Column}
      marginTop={120}
    >
      <ControlsWrapper>
        <Flex justify={FlexJustify.Center}>
          <div onClick={handleBackwardClick}>
            <DirectionControl
              direction={Direction.Left}
              disabled={Persons.length <= itemsToShow}
            />
          </div>
        </Flex>
        <Flex justify={FlexJustify.Center}>
          <div onClick={handleForwardClick}>
            <DirectionControl
              direction={Direction.Right}
              disabled={Persons.length <= itemsToShow}
            />
          </div>
        </Flex>
      </ControlsWrapper>

      <Typography
        textStyle={TextStyle.Headline2_extrabold}
        color={TextColor.Black}
      >
        Testimonials
      </Typography>
      <Flex>
        <Slider
          height={cardVariant === TestimonialCardVariant.ImgInside ? 371 : 349}
          itemsToShow={itemsToShow}
          columnGap={30}
          ref={sliderEl}
        >
          {Persons.map((person) => (
            <TestimonialCard
              cardVariant={cardVariant}
              key={person.id}
              imgUrl={person.imgUrl}
              personName={person.personName}
              personPosition={person.personPosition}
            >
              {person.about}
            </TestimonialCard>
          ))}
        </Slider>
      </Flex>
    </Section>
  );
};

export default TestimonialsSection;
