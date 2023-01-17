import { useSelector } from "react-redux";

import Flex from "components/elements/Flex";
import PostCard from "components/PostCard";
import Typography from "components/Typography";
import { selectPopularPosts } from "store/selectors/selectors";
import { RootState } from "store/index";

const PopularPostsSection = () => {
  const popularPostList = useSelector((store: RootState) =>
    selectPopularPosts(store),
  );

  return (
    <Flex direction="column" align="start" rowGap={30} marginTop={60}>
      <Typography variant="headline4_bold">Popular posts</Typography>
      {popularPostList.map(({ id, date, header, imgUrl }) => (
        <PostCard
          key={id}
          type="small"
          date={date}
          header={header}
          imgUrl={imgUrl}
        />
      ))}
    </Flex>
  );
};

export default PopularPostsSection;
