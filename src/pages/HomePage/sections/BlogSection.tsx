import BlogCard from "components/BlogCard/BlogCard";
import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import Icon from "components/Icon/Icon";
import Typography from "components/Typography/Typography";
import { BlogCards } from "constants/data";
import { ICON_URLS } from "constants/iconPaths";
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  IconColor,
  SectionType,
  TextColor,
  TextStyle,
} from "types/types";
import { ControlsWrapper } from "../components";

const BlogSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120}>
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
      <Flex direction={FlexDirection.Column} align={FlexAlign.Start}>
        <Typography
          textStyle={TextStyle.Headline2_extrabold}
          color={TextColor.Black}
        >
          Our blog
        </Typography>
        <Flex columnGap={30} marginTop={50}>
          {BlogCards.map((card) => (
            <BlogCard
              key={card.id}
              date={card.date}
              header={card.header}
              imgUrl={card.imgUrl}
              text={card.text}
            />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};

export default BlogSection;
