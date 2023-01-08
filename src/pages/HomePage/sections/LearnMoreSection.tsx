import ButtonRound from "components/controls/ButtonRound/ButtonRound";
import Section from "components/elements/Section/Section";
import { ButtonRoundSize, SectionType } from "types/types";
import { ImageHome, LearnMoreBtnWrapper } from "../components";

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
