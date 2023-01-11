import DescriptionSection from "./sections/DescriptionSection";
import TitleSection from "./sections/TitleSection";
import Tag from "components/controls/Tag";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";

import { SectionType } from "types/index";
import { tagList } from "./mocks";
import RelatedPostsSection from "./sections/RelatedPostsSection";
import SubscribeSection from "pages/common-sections/SubscribeSection";

const BlogPage = () => {
  return (
    <>
      <TitleSection />
      <Section type={SectionType.Narrow} marginTop={120} marginBottom={120}>
        <Flex columnGap={30}>
          <Flex direction="column" width={635} align="start">
            <DescriptionSection />
            <RelatedPostsSection />
          </Flex>

          <Flex direction="column" width={445}>
            <Flex columnGap={10} rowGap={10} flexWrap>
              {tagList.map((el) => (
                <Tag key={el.id} active={el.active}>
                  {el.text}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Section>

      <SubscribeSection />
    </>
  );
};

export default BlogPage;
