import Dropdown from "components/Accordion";
import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { blogCategories } from "../mocks";

const CategoriesSection = () => {
  return (
    <Flex direction="column" rowGap={50} marginTop={66}>
      <Typography variant="headline4_bold">Categories</Typography>
      <Flex direction="column">
        {blogCategories.map(({ id, title, content }) => (
          <Dropdown key={id} title={title} content={content} />
        ))}
      </Flex>
    </Flex>
  );
};

export default CategoriesSection;
