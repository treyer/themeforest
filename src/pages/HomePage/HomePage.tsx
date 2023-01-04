import BenefitsCard from "components/BenefitsCard/BenefitsCard";
import ButtonRound from "components/controls/ButtonRound/ButtonRound";
import ButtonSimple from "components/controls/ButtonSimple/ButtonSimple";
import Flex from "components/elements/Flex/Flex";
import Section from "components/elements/Section/Section";
import Typography from "components/Typography/Typography";
import { ICON_URLS } from "constants/iconPaths";
import {
  ButtonRoundSize,
  ButtonSimpleSize,
  FlexAlign,
  FlexDirection,
  FlexJustify,
  SectionDirection,
  SectionType,
  TextColor,
  TextElement,
  TextStyle,
} from "types/types";
import {
  ImageHome,
  ImageSolutions,
  LearnMoreBtnWrapper,
  TextStressed,
} from "./components";

const HomePage = () => {
  return (
    <>
      <Section type={SectionType.Narrow} marginTop={75} columnGap={30}>
        <Flex>
          <Typography
            textStyle={TextStyle.Headline1_extrabold}
            color={TextColor.Black}
          >
            <div>
              Find true power in your data with{" "}
              <TextStressed>Ensome</TextStressed>
            </div>
          </Typography>
        </Flex>
        <Flex justify={FlexJustify.Start}>
          <Typography
            textStyle={TextStyle.Paragraph2_regular}
            color={TextColor.Grey}
            textElement={TextElement.Div}
            width={350}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi.
          </Typography>
        </Flex>
      </Section>

      <Section type={SectionType.Wide} marginTop={90}>
        <LearnMoreBtnWrapper>
          <ButtonRound size={ButtonRoundSize.Big}>Learn more</ButtonRound>
        </LearnMoreBtnWrapper>
        <ImageHome />
      </Section>

      <Section type={SectionType.Narrow} marginTop={120}>
        <Flex width={540}>
          <Typography
            textStyle={TextStyle.Headline0_extrabold}
            color={TextColor.Black}
          >
            <div>
              The <TextStressed>newest</TextStressed>
              <br /> business analytics platform
            </div>
          </Typography>
        </Flex>
        <Flex
          direction={FlexDirection.Column}
          align={FlexAlign.Start}
          width={540}
        >
          <Typography
            textStyle={TextStyle.Paragraph1_regular}
            color={TextColor.Grey}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis etquasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
          <Flex justify={FlexJustify.Start} marginTop={30}>
            <ButtonSimple size={ButtonSimpleSize.Big}>
              Discover more
            </ButtonSimple>
          </Flex>
        </Flex>
      </Section>
      <Section type={SectionType.Wide} marginTop={120} columnGap={46}>
        <ImageSolutions />
        <Flex justify={FlexJustify.Start} align={FlexAlign.Center}>
          <Flex
            direction={FlexDirection.Column}
            justify={FlexJustify.Start}
            width={540}
            marginLeft={46}
            rowGap={30}
          >
            <Flex width="100%">
              <Typography
                textStyle={TextStyle.Headline2_extrabold}
                color={TextColor.Black}
              >
                <div>
                  Radically new solutions <br /> for data
                </div>
              </Typography>
            </Flex>
            <Typography
              textStyle={TextStyle.Paragraph1_regular}
              color={TextColor.Grey}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>
            <Flex width="100%">
              <ButtonSimple size={ButtonSimpleSize.Big}>
                Learn more
              </ButtonSimple>
            </Flex>
          </Flex>
        </Flex>
      </Section>
      <Section
        type={SectionType.Narrow}
        marginTop={120}
        direction={SectionDirection.Column}
      >
        <Typography
          textStyle={TextStyle.Headline2_extrabold}
          color={TextColor.Black}
        >
          <Flex justify={FlexJustify.Center}>
            We provide services that guarantee your success
          </Flex>
        </Typography>
        <Flex marginTop={50}>
          <Flex width={540}>
            <Flex
              direction={FlexDirection.Column}
              columnGap={10}
              align={FlexAlign.Start}
            >
              <Typography
                textStyle={TextStyle.Paragraph0_bold}
                color={TextColor.Primary}
              >
                1830+
              </Typography>
              <Typography
                textStyle={TextStyle.Paragraph2_regular}
                color={TextColor.Grey}
              >
                Project executed
              </Typography>
            </Flex>
            <Flex
              direction={FlexDirection.Column}
              columnGap={10}
              align={FlexAlign.Start}
            >
              <Typography
                textStyle={TextStyle.Paragraph0_bold}
                color={TextColor.Primary}
              >
                834+
              </Typography>
              <Typography
                textStyle={TextStyle.Paragraph2_regular}
                color={TextColor.Grey}
              >
                Satisfied customers
              </Typography>
            </Flex>
            <Flex
              direction={FlexDirection.Column}
              columnGap={10}
              align={FlexAlign.Start}
            >
              <Typography
                textStyle={TextStyle.Paragraph0_bold}
                color={TextColor.Primary}
              >
                390
              </Typography>
              <Typography
                textStyle={TextStyle.Paragraph2_regular}
                color={TextColor.Grey}
              >
                Data management
              </Typography>
            </Flex>
          </Flex>
          <Flex width={540}>
            <Typography
              textStyle={TextStyle.Paragraph1_regular}
              color={TextColor.Grey}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quaeab illo inventore. Donec tincidunt tempor quam, non mollis
              quam finibus nec.
            </Typography>
          </Flex>
        </Flex>
      </Section>

      <Section type={SectionType.Narrow}>
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
              color={TextColor.Grey}
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
      </Section>
    </>
  );
};

export default HomePage;
