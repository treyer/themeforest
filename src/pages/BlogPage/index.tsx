import PostFull from "components/PostFull";
import TitleSection from "./sections/TitleSection";
import TagSection from "./sections/TagSection";
import RelatedPostsSection from "./sections/RelatedPostsSection";
import SubscribeSection from "pages/common-sections/SubscribeSection";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";

import { SectionType } from "types/index";
import PopularPostsSection from "./sections/PopularPostsSection";
import CategoriesSection from "./sections/CategoriesSection";
import SearchSection from "./sections/SearchSection";
import { ICON_URLS } from "constants/iconPaths";

const singlePost = {
  id: 1,
  imgUrl: "/assets/photos/img_1.jpg",
  date: "22 June 2022",
  header: "2022 software development trends explained <br> with benefits",
  text:
    `<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros non iaculis <i> “Vivamus lectus enim, convallis nec dapibus vel, semper id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”. </i></p>` +
    `<p>Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi, sed <a href="#">blandit</a>.</p>` +
    `<p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p>` +
    `<p><q>“Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</q></p>` +
    `<p>Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit, et mattis tortor placerat eget.</b> </p>` +
    `<p>Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>`,
  author: "Hakob Jirair",
  views: 450,
  tags: [
    { id: 0, text: "App" },
    { id: 1, text: "Some Tag" },
  ],
  socialLinks: [
    { id: 1, iconUrl: ICON_URLS.LinkedIn, link: "#" },
    { id: 2, iconUrl: ICON_URLS.Facebook, link: "#" },
    { id: 3, iconUrl: ICON_URLS.Twitter, link: "#" },
    { id: 4, iconUrl: ICON_URLS.Google, link: "#" },
    { id: 5, iconUrl: ICON_URLS.Youtube, link: "#" },
  ],
};

const BlogPage = () => {
  return (
    <>
      <TitleSection />
      <Section type={SectionType.Narrow} marginTop={120} marginBottom={120}>
        <Flex columnGap={30} align="start">
          <Flex direction="column" width={635} align="start">
            <PostFull post={singlePost} />
            <RelatedPostsSection />
          </Flex>

          <Flex direction="column" width={445}>
            <SearchSection />
            <PopularPostsSection />
            <CategoriesSection />
            <TagSection />
          </Flex>
        </Flex>
      </Section>

      <SubscribeSection />
    </>
  );
};

export default BlogPage;
