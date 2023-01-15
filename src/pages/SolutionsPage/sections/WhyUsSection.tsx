import Flex from "components/elements/Flex";
import Image from "components/elements/Image";
import Section from "components/elements/Section";
import Icon from "components/Icon";
import Typography from "components/Typography";
import { ICON_URLS } from "constants/iconPaths";
import { SectionType } from "types/index";
import { chooseReasons } from "./mocks";

const WhyUsSection = () => {
  return (
    <Section type={SectionType.Wide} marginTop={120}>
      <Flex columnGap={50}>
        <Image
          src="/assets/photos/why_us.jpg"
          width={930}
          height={690}
          alt="Why Us"
        />
        <Flex direction="column" rowGap={50}>
          <Typography variant="headline2_extrabold">Why choose us?</Typography>
          <Flex direction="column" rowGap={30}>
            {chooseReasons.map(({ id, header, text }) => (
              <Flex
                key={id}
                direction="column"
                justify="start"
                align="start"
                rowGap={15}
              >
                <Flex columnGap={10} justify="start">
                  <Icon
                    url={ICON_URLS.CheckMark}
                    width={17}
                    height={12}
                    color="primary"
                  />
                  <Typography variant="headline6_bold">{header}</Typography>
                </Flex>
                <Typography
                  variant="paragraph2_regular"
                  element="div"
                  textAlign="start"
                >
                  {text}
                </Typography>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default WhyUsSection;
