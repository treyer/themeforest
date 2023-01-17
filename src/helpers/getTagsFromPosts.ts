import { Post, TagType } from "types/index";

export const getTagsFromPosts = (postList: Post[]): TagType[] => {
  let currentId = 1;
  const tags = ["All topics"];

  return postList.reduce(
    (res, post) => {
      post.tags.forEach((tag) => {
        if (!tags.includes(tag.text)) {
          tags.push(tag.text);
          res.push({ id: currentId, text: tag.text });
          currentId++;
        }
      });
      return res;
    },
    [{ id: 0, text: "All topics" }],
  );
};
