import DescriptionSection from "./sections/DescriptionSection";
import TitleSection from "./sections/TitleSection";
import TagSection from "./sections/TagSection";
import RelatedPostsSection from "./sections/RelatedPostsSection";
import SubscribeSection from "pages/common-sections/SubscribeSection";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";

import { SectionType } from "types/index";
import PopularPostsSection from "./sections/PopularPostsSection";

const BlogPage = () => {
  return (
    <>
      <TitleSection />
      <Section type={SectionType.Narrow} marginTop={120} marginBottom={120}>
        <Flex columnGap={30} align="start">
          <Flex direction="column" width={635} align="start">
            <DescriptionSection />
            <RelatedPostsSection />
          </Flex>

          <Flex direction="column" width={445}>
            <PopularPostsSection />
            <TagSection />
          </Flex>
        </Flex>
      </Section>

      <SubscribeSection />
    </>
  );
};

export default BlogPage;
