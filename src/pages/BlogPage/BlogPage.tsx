import Flex from "components/elements/Flex/Flex";
import Image from "components/elements/Image/Image";
import Section from "components/elements/Section/Section";
import TypographyA from "components/elements/TypographyA/TypographyA";
import TypographyP from "components/elements/TypographyP/TypographyP";
import Icon from "components/Icon/Icon";
import Typography from "components/Typography/Typography";
import { ICON_URLS } from "constants/iconPaths";
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  IconColor,
  SectionType,
  TextColor,
  TextElement,
  TextStyle,
} from "types/types";
import TitleSection from "./sections/TitleSection";

const BlogPage = () => {
  return (
    <>
      <TitleSection />
      <Section type={SectionType.Narrow} marginTop={120}>
        <Flex columnGap={30}>
          <Flex
            direction={FlexDirection.Column}
            width={635}
            align={FlexAlign.Start}
          >
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
                  color={IconColor.Grey}
                />
                <Typography
                  textStyle={TextStyle.Paragraph3_regular}
                  color={TextColor.Grey}
                >
                  22 June 2020
                </Typography>
              </Flex>
              <Flex columnGap={10}>
                <Icon
                  url={ICON_URLS.Person}
                  width={11}
                  height={11}
                  color={IconColor.Grey}
                />
                <Typography
                  textStyle={TextStyle.Paragraph3_regular}
                  color={TextColor.Grey}
                >
                  William Pond
                </Typography>
              </Flex>
            </Flex>
            <Typography
              textStyle={TextStyle.Headline3_extrabold}
              color={TextColor.Black}
              marginTop={40}
            >
              2022 software development trends <br />
              explained with benefits
            </Typography>
            <Typography
              textStyle={TextStyle.Paragraph2_regular}
              color={TextColor.Grey}
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
            <Flex justify={FlexJustify.End}>
              <Typography
                textStyle={TextStyle.Paragraph1_regular}
                color={TextColor.Black}
                textElement={TextElement.Div}
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
            <Typography
              textStyle={TextStyle.Paragraph2_regular}
              color={TextColor.Grey}
            >
              <TypographyP>
                Mauris purus diam, iaculis non leo nec, ultricies fringilla
                odio. Fusce feugiat elit facilisis volutpat venenatis.
                <Typography textStyle={TextStyle.Paragraph2_bold}>
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
            <Flex justify={FlexJustify.Start} columnGap={32}>
              <Flex justify={FlexJustify.Start} columnGap={10}>
                <Icon
                  url={ICON_URLS.DataLine}
                  width={13}
                  height={11}
                  color={IconColor.Grey}
                />
                <Typography
                  textStyle={TextStyle.Paragraph3_regular}
                  color={TextColor.Grey}
                >
                  481 Views
                </Typography>
              </Flex>
              <Flex justify={FlexJustify.Start} columnGap={10}>
                <Icon
                  url={ICON_URLS.Share}
                  width={13}
                  height={11}
                  color={IconColor.Grey}
                />
                <Typography
                  textStyle={TextStyle.Paragraph3_regular}
                  color={TextColor.Grey}
                >
                  Share:
                </Typography>
                <Icon
                  url={ICON_URLS.LinkedIn}
                  width={15}
                  height={15}
                  color={IconColor.Grey}
                />
                <Icon
                  url={ICON_URLS.Facebook}
                  width={15}
                  height={15}
                  color={IconColor.Grey}
                />
                <Icon
                  url={ICON_URLS.Twitter}
                  width={15}
                  height={15}
                  color={IconColor.Grey}
                />
                <Icon
                  url={ICON_URLS.Google}
                  width={15}
                  height={15}
                  color={IconColor.Grey}
                />
                <Icon
                  url={ICON_URLS.Youtube}
                  width={15}
                  height={15}
                  color={IconColor.Grey}
                />
              </Flex>
              <Flex columnGap={10} justify={FlexJustify.Start}>
                <Icon
                  url={ICON_URLS.Tag}
                  width={13}
                  height={13}
                  color={IconColor.Grey}
                />
                <Typography
                  textStyle={TextStyle.Paragraph3_regular}
                  color={TextColor.Grey}
                >
                  Tags:
                </Typography>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction={FlexDirection.Column} width={445}>
            dfg
          </Flex>
        </Flex>
      </Section>
    </>
  );
};

export default BlogPage;
