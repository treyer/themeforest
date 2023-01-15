import BenefitsCard from "components/BenefitsCard";
import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import { SectionType } from "types/index";
import { solutionsList } from "./mocks";

const SolutionsSection = () => {
  return (
    <Section type={SectionType.Narrow}>
      <Flex columnGap={30} rowGap={40} flexWrap>
        {solutionsList.map(({ id, text, ...rest }) => (
          <BenefitsCard key={id} type="advanced" {...rest}>
            {text}
          </BenefitsCard>
        ))}
      </Flex>
    </Section>
  );
};

export default SolutionsSection;
