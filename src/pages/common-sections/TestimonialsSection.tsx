import DirectionControl from "components/controls/DirectionControl";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Slider from "components/Slider";
import TestimonialCard from "components/TestimonialCard";
import Typography from "components/Typography";
import { Persons } from "constants/data";
import { useRef } from "react";
import {
  Direction,
  SectionDirection,
  SectionType,
  SliderHandle,
  TestimonialCardVariant,
} from "types/index";
import { ControlsWrapper } from "./styled";

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
        <Flex justify="center">
          <div onClick={handleBackwardClick}>
            <DirectionControl
              direction={Direction.Left}
              disabled={Persons.length <= itemsToShow}
            />
          </div>
        </Flex>
        <Flex justify="center">
          <div onClick={handleForwardClick}>
            <DirectionControl
              direction={Direction.Right}
              disabled={Persons.length <= itemsToShow}
            />
          </div>
        </Flex>
      </ControlsWrapper>

      <Typography variant="headline2_extrabold">Testimonials</Typography>
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
