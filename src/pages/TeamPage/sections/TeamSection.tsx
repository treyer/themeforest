import Flex from "components/elements/Flex";
import Section from "components/elements/Section";
import TeamCard from "components/TeamCard/TeamCard";
import { SectionType } from "types/index";
import { team } from "./mocks";

const TeamSection = () => {
  return (
    <Section type={SectionType.Narrow} marginTop={240} marginBottom={120}>
      <Flex flexWrap columnGap={20} rowGap={30}>
        {team.map((el, index) => (
          <TeamCard
            key={el.id}
            imgUrl={el.imgUrl}
            name={el.name}
            position={el.position}
            verticalOffset={(index - 1) % 3 === 0 ? 120 : undefined}
          />
        ))}
      </Flex>
    </Section>
  );
};

export default TeamSection;
