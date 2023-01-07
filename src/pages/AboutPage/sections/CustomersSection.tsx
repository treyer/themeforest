import Flex from "components/elements/Flex/Flex";
import Image from "components/elements/Image/Image";
import Section from "components/elements/Section/Section";
import Typography from "components/Typography/Typography";
import { CUSTOMERS_LIST } from "constants/common";
import {
  FlexAlign,
  FlexDirection,
  SectionType,
  TextColor,
  TextElement,
  TextStyle,
} from "types/types";

const CustomersSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={120}>
      <Flex
        direction={FlexDirection.Column}
        align={FlexAlign.Start}
        rowGap={30}
      >
        <Typography
          textStyle={TextStyle.Headline1_extrabold}
          color={TextColor.Black}
        >
          Our customers
        </Typography>
        <Typography
          textStyle={TextStyle.Paragraph1_regular}
          textElement={TextElement.Div}
          width={445}
          color={TextColor.Grey}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudan, totam rem aperiam.
        </Typography>
        <Flex>
          {CUSTOMERS_LIST.map((el) => (
            <Image
              key={el.id}
              src={el.src}
              alt={el.alt}
              width={185}
              height={132}
            />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};

export default CustomersSection;
