import Tag from "components/controls/Tag";
import Flex from "components/elements/Flex";
import Image from "components/elements/Image";
import Section from "components/elements/Section";
import TypographyA from "components/elements/TypographyA";
import TypographyP from "components/elements/TypographyP";
import Icon from "components/Icon";
import Typography from "components/Typography";
import { ICON_URLS } from "constants/iconPaths";
import { SectionType } from "types/index";
import { tagList } from "./mocks";
import TitleSection from "./sections/TitleSection";

const BlogPage = () => {
  return (
    <>
      <TitleSection />
      <Section type={SectionType.Narrow} marginTop={120}>
        <Flex columnGap={30}>
          <Flex direction="column" width={635} align="start">
            <Image
              src="/assets/photos/img_5.jpg"
              alt="Blogs"
              width={635}
              height={330}
            />
            <Flex columnGap={32} width={244} marginTop={25}>
              <Flex columnGap={10}>
                <Icon
                  url={ICON_URLS.Calendar}
                  width={11}
                  height={11}
                  color="gray"
                />
                <Typography variant="paragraph3_regular" color="gray">
                  22 June 2020
                </Typography>
              </Flex>
              <Flex columnGap={10}>
                <Icon
                  url={ICON_URLS.Person}
                  width={11}
                  height={11}
                  color="gray"
                />
                <Typography variant="paragraph3_regular" color="gray">
                  William Pond
                </Typography>
              </Flex>
            </Flex>
            <Typography variant="headline3_extrabold" marginTop={40}>
              2022 software development trends <br />
              explained with benefits
            </Typography>
            <Typography
              variant="paragraph2_regular"
              color="gray"
              marginTop={30}
            >
              <TypographyP>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas. Nulla rhoncus consectetur eros non iaculis
                <i>
                  “Vivamus lectus enim, convallis nec dapibus vel, semper id
                  ante. Morbi pulvinar sapien nulla, eu dignissim enim
                  ullamcorper vitae”.
                </i>
              </TypographyP>
              <TypographyP>
                Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut
                vulputate, augue luctus dignissim pretium, elit magna placerat
                elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,
                sed <TypographyA href="#">blandit</TypographyA>.
              </TypographyP>
              <TypographyP>
                Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
                imperdiet in mauris et, euismod vestibulum lacus. Integer enim
                elit, tincidunt aliq uam ligula id, lacinia auctor orci. Sed
                quis lobortis eros. Fusce id commodo libero. Praesent mollis
                velit ac accumsan ultrices. Ut convallis ipsum pulvinar ante
                maximus suscipit.
              </TypographyP>
            </Typography>
            <Flex justify="end">
              <Typography
                variant="paragraph1_regular"
                element="div"
                width={506}
                marginTop={30}
                marginBottom={30}
                isQuote
              >
                “Morbi urna massa, imperdiet in mauris et, euismod vestibulum
                lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia
                auctor orci. Sed quis lobortis eros. Fusce id commodo libero”
              </Typography>
            </Flex>
            <Typography variant="paragraph2_regular" color="gray">
              <TypographyP>
                Mauris purus diam, iaculis non leo nec, ultricies fringilla
                odio. Fusce feugiat elit facilisis volutpat venenatis.
                <Typography variant="paragraph2_bold">
                  Vestibulum tempor ligula vel orci consectetur, eu euismod
                  augue bibendum. In volutpat libero velit, et mattis tortor
                  placerat eget.
                </Typography>
              </TypographyP>
              <TypographyP>
                Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex
                maximus iaculis. Sed placerat, ligula vel tempor pellentesque,
                odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.
              </TypographyP>
            </Typography>
            <Flex justify="start" columnGap={32} width={520}>
              <Flex justify="start" columnGap={10}>
                <Icon
                  url={ICON_URLS.DataLine}
                  width={13}
                  height={11}
                  color="gray"
                />
                <Typography variant="paragraph3_regular" color="gray">
                  481 Views
                </Typography>
              </Flex>
              <Flex justify="start" columnGap={10}>
                <Icon
                  url={ICON_URLS.Share}
                  width={13}
                  height={11}
                  color="gray"
                />
                <Typography variant="paragraph3_regular" color="gray">
                  Share:
                </Typography>
                <Icon
                  url={ICON_URLS.LinkedIn}
                  width={15}
                  height={15}
                  color="gray"
                />
                <Icon
                  url={ICON_URLS.Facebook}
                  width={15}
                  height={15}
                  color="gray"
                />
                <Icon
                  url={ICON_URLS.Twitter}
                  width={15}
                  height={15}
                  color="gray"
                />
                <Icon
                  url={ICON_URLS.Google}
                  width={15}
                  height={15}
                  color="gray"
                />
                <Icon
                  url={ICON_URLS.Youtube}
                  width={15}
                  height={15}
                  color="gray"
                />
              </Flex>
              <Flex columnGap={8} justify="start">
                <Flex columnGap={10} justify="start">
                  <Icon
                    url={ICON_URLS.Tag}
                    width={13}
                    height={13}
                    color="gray"
                  />
                  <Typography variant="paragraph3_regular" color="gray">
                    Tags:
                  </Typography>
                </Flex>

                <Tag>Data</Tag>
                <Tag>Future</Tag>
              </Flex>
            </Flex>
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
    </>
  );
};

export default BlogPage;
