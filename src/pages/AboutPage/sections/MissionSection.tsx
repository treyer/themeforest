import Flex from "components/elements/Flex";
import Image from "components/elements/Image";
import Section from "components/elements/Section";
import TypographyP from "components/elements/TypographyP";
import Typography from "components/Typography";
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
  SectionType,
} from "types/index";

const MissionSection = () => {
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
        <Typography variant="headline1_extrabold">Our mission</Typography>
        <Typography variant="paragraph1_regular" color="gray">
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

export default MissionSection;
