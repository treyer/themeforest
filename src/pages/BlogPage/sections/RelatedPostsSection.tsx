import Flex from "components/elements/Flex";
import PostCard from "components/PostCard";
import Typography from "components/Typography";
import { relatedPosts } from "../mocks";

const RelatedPostsSection = () => {
  return (
    <Flex direction="column" marginTop={60} align="start" rowGap={37}>
      <Typography variant="headline3_extrabold">Related Post</Typography>
      {relatedPosts.map((el) => (
        <PostCard
          key={el.id}
          imgUrl={el.imgUrl}
          date={el.date}
          header={el.header}
          text={el.text}
        />
      ))}
    </Flex>
  );
};

export default RelatedPostsSection;
