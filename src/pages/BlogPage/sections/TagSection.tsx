import Tag from "components/controls/Tag";
import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { tagList } from "../mocks";

const TagSection = () => {
  return (
    <>
      <Flex direction="column" rowGap={33} align="start" marginTop={60}>
        <Typography variant="headline4_bold">Tags</Typography>
        <Flex columnGap={10} rowGap={10} flexWrap>
          {tagList.map((el) => (
            <Tag key={el.id} active={el.active}>
              {el.text}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default TagSection;
