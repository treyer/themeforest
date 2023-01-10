import ButtonRound from "components/controls/ButtonRound";
import Section from "components/elements/Section";
import { ButtonRoundSize, SectionType } from "types/index";
import { ImageHome, LearnMoreBtnWrapper } from "../styled";

const LearnMoreSection = () => {
  return (
    <Section type={SectionType.Wide} marginTop={90}>
      <LearnMoreBtnWrapper>
        <ButtonRound size={ButtonRoundSize.Big}>Learn more</ButtonRound>
      </LearnMoreBtnWrapper>
      <ImageHome />
    </Section>
  );
};

export default LearnMoreSection;
