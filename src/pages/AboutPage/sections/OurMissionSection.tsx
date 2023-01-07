import Flex from "components/elements/Flex/Flex";
import Image from "components/elements/Image/Image";
import Section from "components/elements/Section/Section";
import TypographyP from "components/elements/TypographyP/TypographyP";
import Typography from "components/Typography/Typography";
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  SectionType,
  TextColor,
  TextStyle,
} from "types/types";

const OurMissionSection = () => {
  return (
    <Section type={SectionType.Narrow} columnGap={30} marginTop={120}>
      <Image
        src="/assets/photos/img_10.jpg"
        alt="Our mission"
        width={635}
        height={425}
        marginTop={15}
      />
      <Flex
        width={445}
        rowGap={30}
        direction={FlexDirection.Column}
        justify={FlexJustify.Start}
        align={FlexAlign.Start}
      >
        <Typography
          textStyle={TextStyle.Headline1_extrabold}
          color={TextColor.Black}
        >
          Our mission
        </Typography>
        <Typography
          textStyle={TextStyle.Paragraph1_regular}
          color={TextColor.Grey}
        >
          <TypographyP>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </TypographyP>
          <TypographyP>
            Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
            finibus consequat felis vel pretium. Aliquam gravida nisi vel
            convallis ultricies. Integer ante sapien, consequat et dolor vel,
            cursus lacinia lectus.
          </TypographyP>
        </Typography>
      </Flex>
    </Section>
  );
};

export default OurMissionSection;
