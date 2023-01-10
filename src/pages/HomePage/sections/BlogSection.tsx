import BlogCard from "components/BlogCard";
import DirectionControl from "components/controls/DirectionControl";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Slider from "components/Slider";
import Typography from "components/Typography";
import { BlogCards } from "constants/data";
import { useRef } from "react";
import {
  Direction,
  FlexAlign,
  FlexDirection,
  FlexJustify,
  SectionType,
  SliderHandle,
} from "types/index";
import { ControlsWrapper } from "../styled";

const BlogSection = () => {
  const sliderEl = useRef<SliderHandle>(null);
  const itemsToShow = 3;

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
    <Section type={SectionType.Narrow} marginTop={120}>
      <ControlsWrapper>
        <Flex justify={FlexJustify.Center}>
          <div onClick={handleBackwardClick}>
            <DirectionControl
              direction={Direction.Left}
              disabled={BlogCards.length <= itemsToShow}
            />
          </div>
        </Flex>
        <Flex justify={FlexJustify.Center}>
          <div onClick={handleForwardClick}>
            <DirectionControl
              direction={Direction.Right}
              disabled={BlogCards.length <= itemsToShow}
            />
          </div>
        </Flex>
      </ControlsWrapper>
      <Flex direction={FlexDirection.Column} align={FlexAlign.Start}>
        <Typography variant="headline2_extrabold">Our blog</Typography>
        <Flex marginTop={50}>
          <Slider
            height={482}
            itemsToShow={itemsToShow}
            columnGap={30}
            ref={sliderEl}
          >
            {BlogCards.map((card) => (
              <BlogCard
                key={card.id}
                date={card.date}
                header={card.header}
                imgUrl={card.imgUrl}
                text={card.text}
              />
            ))}
          </Slider>
        </Flex>
      </Flex>
    </Section>
  );
};

export default BlogSection;
