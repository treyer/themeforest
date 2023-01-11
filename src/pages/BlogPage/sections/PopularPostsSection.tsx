import Flex from "components/elements/Flex";
import PostCard from "components/PostCard";
import Typography from "components/Typography";
import { popularPosts } from "../mocks";

const PopularPostsSection = () => {
  return (
    <Flex direction="column" align="start" rowGap={30} marginTop={60}>
      <Typography variant="headline4_bold">Popular posts</Typography>
      {popularPosts.map((el) => (
        <PostCard
          key={el.id}
          type="small"
          date={el.date}
          header={el.header}
          imgUrl={el.imgUrl}
        />
      ))}
    </Flex>
  );
};

export default PopularPostsSection;
