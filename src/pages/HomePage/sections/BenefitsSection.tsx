import BenefitsCard from "components/BenefitsCard";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import Typography from "components/Typography";
import { ICON_URLS } from "constants/iconPaths";
import {
  FlexAlign,
  FlexDirection,
  SectionType,
  TextColor,
  TextStyle,
} from "types/index";

const BenefitsSection = () => {
  return (
    <Section type={SectionType.Narrow}>
      <Flex align={FlexAlign.Start}>
        <Flex width={540}>
          <Flex
            marginTop={302}
            direction={FlexDirection.Column}
            align={FlexAlign.Start}
            rowGap={30}
          >
            <Typography
              textStyle={TextStyle.Headline2_extrabold}
              color={TextColor.Black}
            >
              The benefits of Ensome
            </Typography>
            <Typography
              textStyle={TextStyle.Paragraph1_regular}
              color={TextColor.Gray}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>
          </Flex>
        </Flex>
        <Flex width={540}>
          <Flex
            direction={FlexDirection.Column}
            marginTop={120}
            rowGap={30}
            columnGap={30}
          >
            <BenefitsCard
              iconUrl={ICON_URLS.BrainCircuit}
              headerText="Machine learning"
            >
              At vero eos et accusamus et iusto odio dignissimos duciu quili
              blandit praesentium voluptatum ipsa quae ab illo.
            </BenefitsCard>
            <BenefitsCard iconUrl={ICON_URLS.Key} headerText="Access control">
              At vero eos et accusamus et iusto odio dignissimos duciu quili
              blandit praesentium voluptatum ipsa quae ab illo.
            </BenefitsCard>
          </Flex>
          <Flex direction={FlexDirection.Column} marginTop={176} rowGap={30}>
            <BenefitsCard
              iconUrl={ICON_URLS.ArrowTrendingLines}
              headerText="Embed analytics"
            >
              At vero eos et accusamus et iusto odio dignissimos duciu quili
              blandit praesentium voluptatum ipsa quae ab illo.
            </BenefitsCard>
            <BenefitsCard
              iconUrl={ICON_URLS.DataArea}
              headerText="Data analytics"
            >
              At vero eos et accusamus et iusto odio dignissimos duciu quili
              blandit praesentium voluptatum ipsa quae ab illo.
            </BenefitsCard>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default BenefitsSection;
