import { Post, Tag } from "types/index";

export const getTagsFromPosts = (postList: Post[]): Tag[] => {
  let currentId = 1;
  const tags = ["All topics"];

  return postList.reduce(
    (res, post) => {
      post.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
          res.push({ id: currentId, text: tag });
          currentId++;
        }
      });
      return res;
    },
    [{ id: 0, text: "All topics" }],
  );
};
