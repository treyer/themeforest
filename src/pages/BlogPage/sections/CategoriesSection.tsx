import Dropdown from "components/controls/Dropdown";
import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { blogCategories } from "../mocks";

const CategoriesSection = () => {
  return (
    <Flex direction="column" rowGap={50} marginTop={66}>
      <Typography variant="headline4_bold">Categories</Typography>
      <Flex direction="column">
        {blogCategories.map((el) => (
          <Dropdown key={el.id} title={el.title} content={el.content} />
        ))}
      </Flex>
    </Flex>
  );
};

export default CategoriesSection;
